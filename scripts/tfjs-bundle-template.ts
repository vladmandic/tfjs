/* eslint-disable import/no-unresolved */
// @ts-nocheck

const externalVersion = 'PLACEHOLDER';

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
