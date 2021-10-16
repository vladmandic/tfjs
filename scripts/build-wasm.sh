#!/bin/bash

if [ ! -d src ]; then
  echo "No sources found"
  exit 1
fi

if [ ! command -v bazel &> /dev/null ]; then
  echo "Bazel cannot be found"
  exit 1
else
  bazel --version | awk '{print $NF}' >src/.bazelversion
  printf "Found "
  bazel --version 
fi

# build wasm binaries and js bindings
cd src
echo "Building: tfjs-backend-wasm"
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm

echo "Building: tfjs-backend-wasm-simd"
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-msimd128" --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm-simd
echo "Building: tfjs-backend-wasm-threaded-simd"
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-pthread" --copt="-msimd128" --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm-threaded-simd
cd ..

echo "Copying WASM binaries to dist"
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm/tfjs-backend-wasm.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-simd/tfjs-backend-wasm-simd.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.wasm dist/
chmod 644 dist/*.wasm

echo "Patching loaders"
cp -f src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.worker.js src/tfjs-backend-wasm/wasm-out/
cp -f src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.js src/tfjs-backend-wasm/wasm-out/
cd src/tfjs-backend-wasm/scripts
node ./create-worker-module.js
node ./patch-threaded-simd-module.js
cd ../../../
