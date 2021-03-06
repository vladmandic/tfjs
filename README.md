# Custom build of Tensorflow/JS for Browsers as pure ESNext

This solution builds **TensorFlow/JS** for Browsers, including individual modules as well as a unified bundle  

Included Backends: `CPU`, `WebGL`, `WebGPU`, `WASM`

Node packages (`tfjs-node` and `tfjs-node-gpu`) are not covered  

## Notes

- Does not perform any modifications to `tfjs` sources  
  Instead it relies on custom import resolver during build process
- Does not use build hacks such as symlinks or virtual packages or manually set sideeffects
- Masively smaller:
  - original `tf.es2017.js` is **3.9MB** *without* `wasm` and `webgpu` backends which are another **2MB** on top
  - new `tfjs.esm.js` is **2.5MB** with `wasm` and `webgpu` included  
    and that is non-minfied and with tree shaking disabled  
- Entire build is about 10x faster  
  Full build takes **<2min** on a notebook *(of which >90% is compiling WASM code)*  
  Rebuild takes **<10sec**
- Changing WASM build compiler parameters improves performance slightly
- Changing backend imports to link to source files instead of symlinked packages solves a lot of dependency issues
- Changing imports from files generated in dist to actual sources makes everything tree shakable

<br><hr><br>

## Install

1. Internal dependencies: `npm install`
2. External dependencies: `git`, `bazel`, `python`
   **Git**: assumed to be already installed if you're here :)  
   **Bazel**: requires `bazel 4.x` <https://docs.bazel.build/versions/4.2.1/install-ubuntu.html>  
   **Python**: requires `python 3.x` aliased as `python`, not compatible with `python 2.x`  

## Steps

### Full Build
Downloads sources and performs full build of all **TFJS** modules
> `npm run build` executes steps:

1. `scripts/download.sh`  
   on first run it clones `@tensorflow/tfjs` from git into `./src`  
   on subsequent runs it rolls forward cloned copy of `@tensorflow/tfjs`
2. `scripts/prepare.sh`  
   creates versioned `.tfjs-*.ts` from build templates  
   and `.js` imports from `.json` files
3. `scripts/build-wasm.sh`  
   build wasm binaries and wasm `.js` exports using `bazel`  
4. `node scripts/build-tfjs.js`  
   build targets in `/dist` using `esbuild` with custom resolver plugins and TypeScript compiler settings  

### Fast Build

Available once full build has been completed
> `npm run build` executes steps:
1. `node scripts/build-tfjs.js`  
   build targets in `/dist` using `esbuild` with custom resolver plugins and TypeScript compiler settings  

### TypeDefs
Default typedefs in `types/index.d.ts` are re-exports of official `@tensorflow/*` modules
Buildinging typedefs from sources is an experimental feature
> `npm run types` executes steps:
1. compile all modules using `TSC` to `types/lib`
2. build rollup using `API-Extractor` to `types/tfjs-core.d.ts` and `types/tfjs.d.ts`
3. patch rollup

### Clean
Remove currently downloaded version of **TFJS** and reset all cached info
> `npm run clean`

### Notes
- `/dist`: all **JS** modules, **MAP** files and **WASM** binaries  
- `/dist/tfjs.esm.js` is default **TFJS bundle** that includes all available backends
- `/types/index.d.ts` re-exports TypeScript **type definitions** from `@tensorflor/tfjs` as a single bundle
- `npm run fast` can be used after completed initial build as it executes last build step only

<br><hr><br>
