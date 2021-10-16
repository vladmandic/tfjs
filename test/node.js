const fs = require('fs');
const tf = require('../dist/tfjs-node.js');

const log = (...msg) => console.log(...msg);
const backends = ['cpu', 'wasm'];
log('backends:', backends);

async function image(fileName) {
  const data = fs.readFileSync(fileName);
  const buffer = tf.node.decodeImage(data);
  return buffer;
}

async function main() {
  log('tfjs:', tf.version);
        
  tf.setWasmPaths('../dist/');
  await tf.ready();

  // tf.ENV.set('CHECK_COMPUTATION_FOR_ERRORS', false);
  // tf.ENV.set('WEBGL_PACK_DEPTHWISECONV', true);
  // tf.ENV.set('WEBGL_USE_SHAPES_UNIFORMS', true);
  // tf.ENV.set('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE', 0);
  tf.ENV.set('WASM_HAS_MULTITHREAD_SUPPORT', false); // tfjs-backend-wasm-threaded-simd.wasm hangs on load
  tf.ENV.set('WASM_HAS_SIMD_SUPPORT', true);

  const model = await tf.loadGraphModel('test/movenet-lightning.json');
  log('model:', model);
  log('tensors', tf.memory().numTensors);

  for (const backend of backends) {
    log('trying:', backend);
    await tf.setBackend(backend);
    const t0 = performance.now();
    let result = {};
    for (let i = 0; i < 10; i++) {
      const tensor = await image('test/test.jpg')
      const resize = tf.image.resizeBilinear(tensor, [192, 192]);
      const norm0 = tf.div(resize, [255]);
      const norm1 = tf.mul(norm0, [255]);
      const cast = tf.cast(norm1, 'int32');
      const expand = tf.expandDims(cast, 0);
      result = { ...result, tensor: tensor.shape, resize: resize.shape, cast: cast.dtype };
      if (i === 0) {
        const predict = model.predict(expand);
        result.result = predict.shape;
        tf.dispose(predict);
      }
      tf.dispose([tensor, resize, norm0, norm1, cast, expand]);
    }
    const t1 = performance.now();
    log('result:', tf.getBackend(), Math.round(t1 - t0), result);
  }
  log('tensors', tf.memory().numTensors);
}

main();
