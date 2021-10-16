const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const log = require('@vladmandic/pilogger');

const buildResolve = { // plugin for esbuild
  name: 'aliases',
  setup(f) { // intercept and remap import paths
    f.onResolve({ filter: /^@tensorflow\/tfjs-core$/ }, (args) => ({ path: path.join(__dirname, args.path.replace('@tensorflow/tfjs-core', 'src/tfjs-core/src/index.ts')) }));
    f.onResolve({ filter: /^@tensorflow\/tfjs-core\/dist\// }, (args) => ({ path: path.join(__dirname, args.path.replace('@tensorflow/tfjs-core/dist/', 'src/tfjs-core/src/') + '.ts') }));
    f.onResolve({ filter: /^@tensorflow\/tfjs-backend-cpu\/dist\/shared$/ }, (args) => ({ path: path.join(__dirname, args.path.replace('@tensorflow/tfjs-backend-cpu/dist/shared', 'src/tfjs-backend-cpu/src/shared.ts')) }));
    f.onResolve({ filter: /tfjs-backend-wasm.js$/ }, (args) => ({ path: path.join(__dirname, 'src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm/tfjs-backend-wasm.js') }));
    f.onResolve({ filter: /tfjs-backend-wasm-threaded-simd.js$/ }, (args) => ({ path: path.join(__dirname, 'src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.js') }));
    f.onResolve({ filter: /tfjs-backend-wasm-threaded-simd.worker.js$/ }, (args) => ({ path: path.join(__dirname, 'src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.worker.js') }));
  },
}

const buildOptions = {
  global: {
    logLevel: 'error',
    treeShaking: 'ignore-annotations',
    plugins: [buildResolve], 
    sourcemap: true,
    target: 'esnext',
  },
  minify: {
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
  },
  browser: {
    bundle: true,
    external: ['fs', 'path', 'os', 'perf_hooks', 'worker_threads'],
    metafile: true,
    platform: 'browser',
    format: 'esm',
  },
  node: {

  }
}

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

async function build() {
  log.header();
  if (!fs.existsSync('.latest.ts')) {
    log.error('Build not ready:', { missing: '.latest.ts' });
  } else {
    const version = fs.readFileSync('.latest').toString();
    let meta;
    let data;
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-core/src/index.ts'], outfile: 'dist/tfjs-core.esm.js', });
    data = await stats(meta);
    log.state('Build Core:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-cpu/src/index.ts'], outfile: 'dist/tfjs-backend-cpu.esm.js', });
    data = await stats(meta);
    log.state('Build CPU:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-webgl/src/index.ts'], outfile: 'dist/tfjs-backend-webgl.esm.js', });
    data = await stats(meta);
    log.state('Build WebGL:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-webgpu/src/index.ts'], outfile: 'dist/tfjs-backend-webgpu.esm.js', });
    data = await stats(meta);
    log.state('Build WebGPU:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['src/tfjs-backend-wasm/src/index.ts'], outfile: 'dist/tfjs-backend-wasm.esm.js', });
    data = await stats(meta);
    log.state('Build WASM:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, entryPoints: ['.latest.ts'], outfile: 'dist/tfjs.esm.js', });
    data = await stats(meta);
    log.state('Build Bundle:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
    // @ts-ignore
    meta = await esbuild.build({ ...buildOptions.global, ...buildOptions.browser, ...buildOptions.minify, entryPoints: ['.latest.ts'], outfile: 'dist/tfjs.min.esm.js', });
    data = await stats(meta);
    log.state('Build Bundle:', { version, output: data.outputFiles, files: data.imports, inputBytes: data.importBytes, outputBytes: data.outputBytes });
  }
}

build();
