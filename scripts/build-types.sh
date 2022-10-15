#!/bin/bash
# set -e
cd types/

echo "Install dependencies"
pnpm install

echo "Link sources"
if ! [ -L "src" ]; then echo aaaa; ln -s ../src src; fi

echo "Build types in types/lib"
node_modules/.bin/tsc
ln -s ../../src/tfjs-backend-wasm/wasm-out lib/tfjs-backend-wasm/wasm-out

echo "Compile tfjs-core.d.ts"
node_modules/.bin/api-extractor run --local --verbose --config tfjs-core.json

echo "Compile tfjs.d.ts"
node_modules/.bin/api-extractor run --local --verbose --config tfjs.json

cd ..
echo "done..."
