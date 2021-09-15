#!/bin/bash

# either update tfjs or download it
if [ -d src ] && [ -f src/package.json ]; then
  cd src
  git config pull.rebase true
  git stash
  git pull
  cd ..
else
  git clone --depth 1 https://github.com/tensorflow/tfjs src
  cd src
  rm tfjs.code-workspace 2>/dev/null
  bazel --version | awk '{print $NF}' > .bazelversion
  cd ..
fi

# create version string
DATE=`date +'%Y%m%d'`
VERSION=`npm info @tensorflow/tfjs version`
printf "Version: $VERSION-$DATE\n"
sed "s/PLACEHOLDER/$VERSION-$DATE/g" tfjs.ts >.latest.ts
printf "$VERSION-$DATE" >.latest
bazel --version | awk '{print $NF}' >src/.bazelversion
