// import '../types/lib/tfjs-core/src/index';
// import { Tensor } from '../types/lib/tfjs-core/src/tensor';
// import { Rank } from '../types/lib/tfjs-core/src/types';
// import '../types/lib/tfjs-core/src/register_all_gradients';
// import '../types/lib/tfjs-core/src/public/chained_ops/register_all_chained_ops';
import * as data from '../types/lib/tfjs-data/src/index';
import '../types/lib/tfjs-data/src/index';
import '../types/lib/tfjs-layers/src/index';
import '../types/lib/tfjs-converter/src/index';
import '../types/lib/tfjs-backend-cpu/src/index';
import '../types/lib/tfjs-backend-wasm/src/index';
import '../types/lib/tfjs-backend-webgl/src/index';
import '../types/lib/tfjs-backend-webgpu/src/index';

export declare const version: {
  'tfjs-core': string;
  'tfjs-backend-cpu': string;
  'tfjs-backend-webgl': string;
  'tfjs-data': string;
  'tfjs-layers': string;
  'tfjs-converter': string;
  tfjs: string;
};
// export * from '../types/lib/tfjs-core/src/index';
// export { Tensor, Rank }
// export { data }
export * from '../types/lib/tfjs-layers/src/index';
export * from '../types/lib/tfjs-converter/src/index';
export * from '../types/lib/tfjs-backend-cpu/src/index';
export * from '../types/lib/tfjs-backend-webgl/src/index';
export * from '../types/lib/tfjs-backend-wasm/src/index';
export * from '../types/lib/tfjs-backend-webgpu/src/index';
