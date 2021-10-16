#!/bin/bash

# create version string
DATE=`date +'%Y%m%d'`
VERSION=`npm info @tensorflow/tfjs version`
printf "Version: $VERSION-$DATE\n"
sed "s/PLACEHOLDER/$VERSION-$DATE/g" scripts/tfjs-bundle-template.ts >.tfjs-browser.ts
sed "s/PLACEHOLDER/$VERSION-$DATE/g" scripts/tfjs-node-template.ts >.tfjs-node.ts
sed "s/PLACEHOLDER/$VERSION-$DATE/g" scripts/tfjs-node-gpu-template.ts >.tfjs-node-gpu.ts
printf "$VERSION-$DATE" >.tfjs-version

# create js exports from json files
mkdir src/tfjs-converter/src/operations/op_list 2>/dev/null
find src/tfjs-converter/python/tensorflowjs/op_list/ -name '*.json' -exec basename {} .json \; | while read F; do
  sed '1i export const json = ' src/tfjs-converter/python/tensorflowjs/op_list/$F.json >src/tfjs-converter/src/operations/op_list/$F.js
done
