#!/bin/bash

# build wasm binaries and js bindings
cd src
bazel --version | awk '{print $NF}' >.bazelversion
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-msimd128" --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm-simd
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-pthread" --copt="-msimd128" --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm-threaded-simd
cd ..

cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm/tfjs-backend-wasm.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-simd/tfjs-backend-wasm-simd.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.wasm dist/
chmod 644 dist/*.wasm
