# Custom TFJS Bundle

## Steps

1. `download.sh`: download tfjs from git 
2. `prepare.sh`: create versioned `.latest.ts` from `tfjs.ts` and `.js` imports from `.json` files
3. `wasm.sh`: build wasm binaries and wasm `.js` exports using `bazel`  
4. `node build.js`: build targets in `/dist`  

## Dependencies

- Bazel
- NPMs:

  ```json
  {
    "@webgpu/glslang": "0.0.12", // required by webgpu but newer versions are not supported
    "long": "^4.0.0",            // not listed by tfjs but required
    "seedrandom": "^3.0.5"       // not listed by tfjs but required
  }
  ```
