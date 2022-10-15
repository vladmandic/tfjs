const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const log = require('@vladmandic/pilogger');
const apiextractor = require('@microsoft/api-extractor');
const package = require('../package.json');

const buildResolve = { // plugin for esbuild
  name: 'aliases',
  setup(f) { // intercept and remap import paths
    f.onResolve({ filter: /^@tensorflow\/tfjs-core$/ }, (args) => ({ path: path.join(__dirname, args.path.replace('@tensorflow/tfjs-core', '../src/tfjs-core/src/index.ts')) }));
    f.onResolve({ filter: /^@tensorflow\/tfjs-core\/dist\// }, (args) => ({ path: path.join(__dirname, args.path.replace('@tensorflow/tfjs-core/dist/', '../src/tfjs-core/src/') + '.ts') }));
    f.onResolve({ filter: /^@tensorflow\/tfjs-backend-cpu\/dist\/shared$/ }, (args) => ({ path: path.join(__dirname, args.path.replace('@tensorflow/tfjs-backend-cpu/dist/shared', '../src/tfjs-backend-cpu/src/shared.ts')) }));
    f.onResolve({ filter: /^@tensorflow\// }, (args) => { log.warn('resolver:', args); });
  },
};

const buildOptions = {
  global: {
    logLevel: 'warning',
    treeShaking: true,
    ignoreAnnotations: true,
    plugins: [buildResolve],
    sourcemap: true,
    target: 'es2021',
  },
  minify: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  browser: {
    bundle: true,
    metafile: true,
    platform: 'browser',
    format: 'esm',
    // external: ['fs', 'path', 'os', 'perf_hooks', 'worker_threads'],
  },
};

async function stats(json) {
  const data = {};
  if (json && json.metafile?.inputs && json.metafile?.outputs) {
    for (const [key, val] of Object.entries(json.metafile.inputs)) {
      if (key.startsWith('node_modules')) {
        data.modules = (data.modules || 0) + 1;
        data.moduleBytes = (data.moduleBytes || 0) + val.bytes;
      } else {
        data.imports = (data.imports || 0) + 1;
        data.importBytes = (data.importBytes || 0) + val.bytes;
      }
    }
    const files = [];
    for (const [key, val] of Object.entries(json.metafile.outputs)) {
      if (!key.endsWith('.map')) {
        files.push(key);
        data.outputBytes = (data.outputBytes || 0) + val.bytes;
      }
    }
    data.outputFiles = files.join(', ');
  }
  return data;
}

async function api() {
  const extractorConfig = apiextractor.ExtractorConfig.loadFileAndPrepare('api-extractor.json');
  const extractorResult = apiextractor.Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: false,
    messageCallback: (msg) => {
      msg.handled = true;
      if (msg.logLevel === 'none' || msg.logLevel === 'verbose' || msg.logLevel === 'info') return;
      if (msg.sourceFilePath?.includes('/node_modules/')) return;
      log.data('API', { level: msg.logLevel, category: msg.category, id: msg.messageId, file: msg.sourceFilePath, line: msg.sourceFileLine, text: msg.text });
    },
  });
  log.state('API-Extractor:', { succeeeded: extractorResult.succeeded, errors: extractorResult.errorCount, warnings: extractorResult.warningCount });
}

async function build() {
  log.header();
  if (!fs.existsSync('.tfjs-version')) {
    log.error('Build not ready:', { missing: '.tfjs-version' });
  } else {
    const version = fs.readFileSync('.tfjs-version').toString();
    log.info('Options:', { ...buildOptions.global, ...buildOptions.browser });
    let meta;
    let data;
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-core/src/index.ts'], outfile: 'dist/tfjs-core.esm.js' });
    data = await stats(meta);
    log.state('Build Core:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-cpu/src/index.ts'], outfile: 'dist/tfjs-backend-cpu.esm.js' });
    data = await stats(meta);
    log.state('Build CPU:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-webgl/src/index.ts'], outfile: 'dist/tfjs-backend-webgl.esm.js' });
    data = await stats(meta);
    log.state('Build WebGL:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-webgpu/src/index.ts'], outfile: 'dist/tfjs-backend-webgpu.esm.js' });
    data = await stats(meta);
    log.state('Build WebGPU:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-wasm/src/index.ts'], outfile: 'dist/tfjs-backend-wasm.esm.js' });
    data = await stats(meta);
    log.state('Build WASM:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['.tfjs-browser.ts'], outfile: 'dist/tfjs.esm.js' });
    data = await stats(meta);
    log.state('Build Bundle:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, ...buildOptions.minify, entryPoints: ['.tfjs-browser.ts'], outfile: 'dist/tfjs.min.esm.js' });
    data = await stats(meta);
    log.state('Build Bundle:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });

    // build typedef rollup
    // await api();

    // patch package.json
    log.info('Pached package.json:', version);
    package.version = version;
    const str = JSON.stringify(package, null, 2);
    fs.writeFileSync('package.json', str);
  }
}

build();
