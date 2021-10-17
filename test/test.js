import * as tf from '../dist/tfjs.esm.js';
// import * as wasm from '../dist/tfjs-backend-wasm.esm.js'
// import '../dist/tfjs-backend-webgl.esm.js'
// import '../dist/tfjs-backend-webgpu.esm.js'

const numIterations = 10;
window['tf'] = tf;

// eslint-disable-next-line no-console
const log = (...msg) => console.log(...msg);

const backends = ['cpu'];
if (typeof tf.setWasmPaths !== 'undefined') backends.push('wasm');
if (typeof tf.MathBackendWebGL !== 'undefined') backends.push('webgl');
if (typeof navigator['gpu'] !== 'undefined') backends.push('webgpu');
log('backends:', backends);

async function image(url) {
  const img = document.createElement('img');
  const loaded = new Promise((resolve) => img.onload = () => resolve(true));
  img.src = url;
  await loaded;
  img.width = img.naturalWidth;
  img.height = img.naturalHeight;
  const canvas = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(img.naturalWidth, img.naturalHeight) : document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return { imageElement: img, imageData: data };
}

async function main() {
  tf.setWasmPaths('../dist/');
  await tf.ready();
  log('tfjs version:', tf.version);
  log('tfjs flags:', tf.ENV.flags);

  // tf.ENV.set('CHECK_COMPUTATION_FOR_ERRORS', false);
  // tf.ENV.set('WEBGL_PACK_DEPTHWISECONV', true);
  // tf.ENV.set('WEBGL_USE_SHAPES_UNIFORMS', true);
  // tf.ENV.set('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE', 0);
  // tf.ENV.set('WASM_HAS_MULTITHREAD_SUPPORT', false);
  // tf.ENV.set('WASM_HAS_SIMD_SUPPORT', true);

  const img = await image('test/test.jpg');
  const model = await tf.loadGraphModel('test/model.json');
  const modelInputSize = model.inputs[0].shape[1];
  log('model:', model, 'tensors', tf.memory().numTensors);
  let t0;
  let t1;

  for (const backend of backends) {
    log('testing backend:', backend);
    await tf.setBackend(backend);
    const result = {};

    t0 = performance.now();
    for (let i = 0; i < numIterations; i++) {
      const data = tf.tensor(img.imageData.data, [img.imageData.height, img.imageData.width, 4]);
      const norm = tf.div(data, [255]);
      const sum = tf.sum(norm);
      result.sumVal = (await sum.data())[0];
      tf.dispose([data, norm, sum]);
    }
    t1 = performance.now();
    result.createMs = Math.round((t1 - t0) / numIterations);

    t0 = performance.now();
    for (let i = 0; i < numIterations; i++) {
      const tensor = tf.browser.fromPixels(img.imageElement);
      const resize = tf.image.resizeBilinear(tensor, [modelInputSize, modelInputSize]);
      const norm = tf.div(resize, [255]);
      const cast = tf.cast(norm, 'float32');
      const expand = tf.expandDims(cast, 0);
      const predict = model.predict(expand);
      result.predictVal = (await predict.data())[0];
      tf.dispose([tensor, resize, norm, cast, expand, predict]);
      t1 = performance.now();
      if (i === 0) result.warmupMs = Math.round(t1 - t0);
      else result.infterMs = Math.round((t1 - t0) / numIterations);
    }
    log({ backend: tf.getBackend(), ...result });
  }
  log('tfjs registry:', tf.engine().registry);
}

window.onload = main;
