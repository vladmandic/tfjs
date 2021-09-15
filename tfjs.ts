/**
 * Creates custom tfjs bundle
 * 
 * @dependencies
 *   @webgpu/glslang@0.0.12 // newer versions are not supported
 *   long@4.0.0
 */

const externalVersion = 'PLACEHOLDER';

/*
import './src/tfjs-core/src/flags';
import './src/tfjs-backend-webgl/src/flags_webgl';
import './src/tfjs-backend-webgpu/src/flags_webgpu';
import './src/tfjs-backend-wasm/src/flags_wasm';
*/

// export all from sources
export * from './src/tfjs-core/src/index';
export * from './src/tfjs-layers/src/index';
export * from './src/tfjs-converter/src/index';
export * as data from './src/tfjs-data/src/index';
export * from './src/tfjs-backend-cpu/src/index';
export * from './src/tfjs-backend-webgl/src/index';
export * from './src/tfjs-backend-webgpu/src/index';
export * from './src/tfjs-backend-wasm/src/index';

// export versions
export const version = {
  tfjs: externalVersion,
  'tfjs-core': externalVersion,
  'tfjs-data': externalVersion,
  'tfjs-layers': externalVersion,
  'tfjs-converter': externalVersion,
  'tfjs-backend-cpu': externalVersion,
  'tfjs-backend-webgl': externalVersion,
  'tfjs-backend-wasm': externalVersion,
};
