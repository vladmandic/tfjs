#!/bin/bash
# set -e

if ! [ -d "src/tfjs-backend-wasm/wasm-out" ]; then
  echo "Run build first"
  exit 1
fi

echo "Build types in types/lib"
node_modules/.bin/tsc --project scripts/types.json

echo "Link WASM"
ln -s ../../../src/tfjs-backend-wasm/wasm-out types/lib/tfjs-backend-wasm/wasm-out

echo "Compile tfjs-core.d.ts"
node_modules/.bin/api-extractor run --local --verbose --config scripts/tfjs-core.json 2>&1 | grep -vi 'extractor' | grep -v '^$'

echo "Compile tfjs.d.ts"
node_modules/.bin/api-extractor run --local --verbose --config scripts/tfjs.json 2>&1 | grep -vi 'extractor' | grep -v '^$'

echo "Hack tfjs.d.ts"
sed 's/\@tensorflow\/tfjs-core/\.\/tfjs-core/' types/lib/tfjs.d.ts | grep -v '///' > types/tfjs.d.ts
