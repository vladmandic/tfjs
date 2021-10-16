# Custom TFJS Bundle

## Included

- Browser: `CPU`, `WebGL`, `WebGPU`, `WASM`
- Node: *N/A* [Future]

## Notes

- Works on unmodified tfjs sources  
  Instead it relies on custom import resolver during build process
- Does not use build hacks such as symlinks or virtual packages
- Masively smaller:
  - original `tf.es2017.js` is **3.9MB** *without* `wasm` and `webgpu` backends which are another **2MB** on top
  - new `tf.esm.js` is **2.5MB** with `wasm` and `webgpu` included  
    and that is non-minfied and with tree shaking disabled  
- Entire build is about 10x faster  
  Build takes **<2min** on a notebook *(of which >90% is compiling WASM code)*
- Changing WASM build compiler parameters improves performance slightly
- Changing backend imports to link to source files instead of symlinked packages solves a lot of dependency issues
- Changing imports from files generated in dist to actual sources makes everything tree shakable

<br><hr><br>

## Steps

`npm run build` runs:

1. `download.sh`  
   clone or pull `tfjs` from git into `./src`
2. `prepare.sh`  
   creates versioned `.tfjs-*.ts` from build templates and `.js` imports from `.json` files
3. `build-wasm.sh`  
   build wasm binaries and wasm `.js` exports using `bazel`  
4. `node build-tfjs.js`  
   build targets in `/dist` using `esbuild` with custom plugins  

## Dependencies

Bazel:
  > <https://docs.bazel.build/versions/4.2.1/install-ubuntu.html>
NPMs:

- General
  > `long`  
  > `seedrandom`  
- WebGPU
  > `@webgpu/glslang@0.0.12` // newer versions are not supported  
- Node
  > `progress`  
  > `@mapbox/node-pre-gyp`  
  > `aws-sdk`  
  > `mock-aws-s3`  
  > `nock`  
  > `progress`  

<br><hr><br>

## Issues

- `tfjs-backend-wasm-threaded-simd.wasm` hangs on load

## Todo

- Shell scripts param validation and exception handling
- NodeJS builds
- Automated tests
- TypeScript typings
