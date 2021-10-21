#!/bin/bash
set -e

# create version string
DATE=`date +'%Y%m%d'`
VERSION=`npm info @tensorflow/tfjs version`
printf "Detected version: $VERSION-$DATE\n"
sed "s/PLACEHOLDER/$VERSION-$DATE/g" scripts/tfjs-bundle-template.ts >.tfjs-browser.ts
printf "$VERSION-$DATE" >.tfjs-version

# create js exports from json files
SRC=src/tfjs-converter/python/tensorflowjs/op_list/
DST=src/tfjs-converter/src/operations/op_list
if [ ! -d $SRC ]; then mkdir $SRC; fi;
if [ ! -d $DST ]; then mkdir $DST; fi;
echo "Creating op list imports"
find $SRC -name '*.json' -exec basename {} .json \; | while read F; do
  sed '1i export const json = ' $SRC/$F.json >$DST/$F.js
done
