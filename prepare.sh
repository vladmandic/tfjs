#!/bin/bash

# create version string
DATE=`date +'%Y%m%d'`
VERSION=`npm info @tensorflow/tfjs version`
printf "Version: $VERSION-$DATE\n"
sed "s/PLACEHOLDER/$VERSION-$DATE/g" tfjs.ts >.latest.ts
printf "$VERSION-$DATE" >.latest

# create js exports from json files
mkdir src/tfjs-converter/src/operations/op_list 2>/dev/null
find src/tfjs-converter/python/tensorflowjs/op_list/ -name '*.json' -exec basename {} .json \; | while read F; do
  sed '1i export const json = ' src/tfjs-converter/python/tensorflowjs/op_list/$F.json >src/tfjs-converter/src/operations/op_list/$F.js
done
