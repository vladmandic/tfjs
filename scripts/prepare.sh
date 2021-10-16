#!/bin/bash

# create version string
DATE=`date +'%Y%m%d'`
VERSION=`npm info @tensorflow/tfjs version`
printf "Detected version: $VERSION-$DATE\n"
sed "s/PLACEHOLDER/$VERSION-$DATE/g" scripts/tfjs-bundle-template.ts >.tfjs-browser.ts
printf "$VERSION-$DATE" >.tfjs-version

# create js exports from json files
OPLIST=src/tfjs-converter/python/tensorflowjs/op_list/
mkdir $OPLIST 2>/dev/null
if [ -d $OPLIST ]; then
  echo "Creating op list imports"
  find $OPLIST -name '*.json' -exec basename {} .json \; | while read F; do
    sed '1i export const json = ' $OPLIST/$F.json >src/tfjs-converter/src/operations/op_list/$F.js
  done
else
  echo "TFJS sources do not contain op lists"
  exit 1
fi
