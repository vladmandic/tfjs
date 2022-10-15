#!/bin/bash
set -e

if [ ! -d src ]; then
  echo "No sources found"
  exit 1
fi

if ! [ -x "$(command -v bazel)" ]; then
  echo "Bazel cannot be found"
  exit 1
else
  bazel --version | awk '{print $NF}' >src/.bazelversion
  printf "Found "
  bazel --version 
fi

if ! [ -x "$(command -v python)" ]; then
  echo "Python cannot be found"
  exit 1
else
  printf "Found "
  python --version 
fi

# build wasm binaries and js bindings
cd src

# echo "Cleaning Bazel build cache"
# bazel clean --expunge

echo "Building: tfjs-backend-wasm"
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm
echo "Building: tfjs-backend-wasm-simd"
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-msimd128" --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm-simd
echo "Building: tfjs-backend-wasm-threaded-simd"
bazel build --symlink_prefix="wasm-out/" -c opt --copt="-pthread" --copt="-msimd128" --copt="-O3" --copt="-flto" //tfjs-backend-wasm/src/cc:tfjs-backend-wasm-threaded-simd
cd ..

echo "Copying WASM binaries to dist"
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm/tfjs-backend-wasm.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm/tfjs-backend-wasm.js dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-simd/tfjs-backend-wasm-simd.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-simd/tfjs-backend-wasm-simd.js dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.wasm dist/
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.js dist/
chmod 644 dist/*.wasm dist/*.js

echo "Copying WASM binaries to wasm-out"
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm/tfjs-backend-wasm.js src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm.js
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-simd/tfjs-backend-wasm-simd.js src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-simd.js
cp src/wasm-out/bin/tfjs-backend-wasm/src/cc/tfjs-backend-wasm-threaded-simd/tfjs-backend-wasm-threaded-simd.js src/tfjs-backend-wasm/wasm-out/tfjs-backend-wasm-threaded-simd.js
chmod 644 src/tfjs-backend-wasm/wasm-out/*

echo "Patching WASM loaders"
cd src/tfjs-backend-wasm/scripts
node ./create-worker-module.js ../../../dist/tfjs-backend-wasm.js ../wasm-out/tfjs-backend-wasm.worker.js
node ./create-worker-module.js ../../../dist/tfjs-backend-wasm-simd.js ../wasm-out/tfjs-backend-wasm-simd.worker.js
node ./create-worker-module.js ../../../dist/tfjs-backend-wasm-threaded-simd.js ../wasm-out/tfjs-backend-wasm-threaded-simd.worker.js
cd ../../../
chmod 644 src/tfjs-backend-wasm/wasm-out/*
cp src/tfjs-backend-wasm/wasm-out/*.js dist/

echo "Done"
