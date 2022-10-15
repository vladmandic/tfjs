#!/bin/bash
set -e

# either update tfjs or download it
if [ -d src ] && [ -f src/package.json ]; then
  echo "Updating TFJS sources to latest version"
  cd src
  git config pull.rebase true
  git stash
  git pull
  cd ..
else
  echo "Fetching latest version of TFJS"
  git clone --depth 1 https://github.com/tensorflow/tfjs src
  # git clone --depth 1 --branch settimeout https://github.com/gyagp/tfjs src
  cd src
  cd ..
fi

if [ -f tfjs.code-workspace ]; then rm tfjs.code-workspace; fi
if [ -f src/tfjs-automl/demo/img_classification/package.json ]; then rm src/tfjs-automl/demo/img_classification/package.json; fi
if [ -f src/tfjs-automl/demo/object_detection/package.json ]; then rm src/tfjs-automl/demo/object_detection/package.json; fi

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

# install dev dependencies
echo "Install dependencies"
cp .npmrc src/
cd src
pnpm install
cd ..

# done
echo "Done..."
