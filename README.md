# Custom TFJS Bundle

## Status

Browser:

- Working: `CPU`, `WebGL`, `WebGPU`
- Not working: `WASM`

NodeJS:

- N/A [Future]

Typings:

- N/A [Future]

## Steps

1. `download.sh`: clone or pull `tfjs` from git into `./src`
2. `prepare.sh`: create versioned `.latest.ts` from `tfjs.ts` and `.js` imports from `.json` files
3. `wasm.sh`: build wasm binaries and wasm `.js` exports using `bazel`  
4. `node build.js`: build targets in `/dist` using `esbuild` with custom plugins  

## Dependencies

- Bazel:
  > <https://docs.bazel.build/versions/4.2.1/install-ubuntu.html>
- NPMs:
  > `@webgpu/glslang@0.0.12` // required by webgpu but newer versions are not supported  
  > `long@4.0.0`             // not listed by tfjs but required  
  > `seedrandom@3.0.5`       // not listed by tfjs but required  
