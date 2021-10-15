#!/bin/env bash
# set -x

# update packages
# pip list --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U
# pip list --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U
# npm install yarn npm-check-updates --global

LOG="/home/vlado/dev/tfjs-build.log"
DEST="/home/vlado/dev/tfjs-utils/tfjs"
echo "starting: $PWD $0" | tee $LOG

# either update tfjs or download it
if [ -d tfjs ]; then
  cd tfjs
  echo "git rebase" | tee -a $LOG
  git config pull.rebase true | tee -a $LOG
  git stash >>$LOG 2>&1
  git pull >>$LOG 2>&1
else
  echo "git clone" | tee -a $LOG
  git clone --depth 1 https://github.com/tensorflow/tfjs >>$LOG 2>&1
  cd tfjs
fi
HOME=$PWD

rm tfjs.code-workspace 2>/dev/null

# update build target from es5 to es2020
echo "patching build targets: $PWD" | tee -a $LOG
find . \( -name tsconfig.json -o -name rollup.config.js \) | grep -v node_modules | while read f; do
  sed -r -i 's/(es5|es2015|es2016|es2017|es2018|es2020)/esnext/gi' $f
done

# register correct bazel version
bazel --version | awk '{print $NF}' > .bazelversion

# echo "cleaning dist: $PWD" | tee -a $LOG
# find -type f \( ! -path "*node_modules*" -a ! -path "*tools*" -a -path "*dist*" \) -exec rm -f {} \;

# echo "cleaning packages: $PWD" | tee -a $LOG
# find -type d -name node_modules -exec rm -rf {} \; 2>/dev/null

echo "install dependencies: $PWD" | tee -a $LOG
yarn add tslib >>$LOG 2>&1
yarn install --ignore-optional --ignore-engines >>$LOG 2>&1
echo "upgrade dependencies: $PWD" | tee -a $LOG
yarn upgrade --ignore-optional --ignore-engines --force >>$LOG 2>&1

cd tfjs
echo "bundle: $PWD" | tee -a $LOG
echo "  install" | tee -a $LOG
yarn add tslib >>$LOG 2>&1
yarn install --ignore-optional --ignore-engines >>$LOG 2>&1
echo "  upgrade" | tee -a $LOG
yarn upgrade --ignore-optional --ignore-engines --force >>$LOG 2>&1
echo "  build-deps" | tee -a $LOG
yarn run build-deps >>$LOG 2>&1
echo "  build" | tee -a $LOG
yarn run build >>$LOG 2>&1
echo "  build-npm" | tee -a $LOG
yarn run build-npm >>$LOG 2>&1

cd ../tfjs-backend-webgl
echo "package: $PWD" | tee -a $LOG
yarn run build-npm >>$LOG 2>&1

cd ../tfjs-backend-webgpu
echo "package: $PWD" | tee -a $LOG
chmod 755 scripts/build-npm.sh
yarn run build-npm >>$LOG 2>&1

cd ../tfjs-backend-wasm
echo "package: $PWD" | tee -a $LOG
yarn run build-npm >>$LOG 2>&1

cd ../tfjs-node
echo "package: $PWD" | tee -a $LOG
echo "  install" | tee -a $LOG
yarn install --ignore-optional --ignore-engines >>$LOG 2>&1
echo "  upgrade" | tee -a $LOG
yarn upgrade --ignore-optional --ignore-engines --force >>$LOG 2>&1
yarn run build-npm >>$LOG 2>&1

cd ../tfjs-node-gpu
echo "package: $PWD" | tee -a $LOG
echo "  prepare" | tee -a $LOG
./prep-gpu.sh >>$LOG 2>&1
echo "  install" | tee -a $LOG
yarn install --ignore-optional --ignore-engines >>$LOG 2>&1
echo "  upgrade" | tee -a $LOG
yarn upgrade --ignore-optional --ignore-engines --force >>$LOG 2>&1
yarn run build-npm >>$LOG 2>&1

# copy to tfjs-utils
echo "copying from $HOME to $DEST" | tee -a $LOG
cd $HOME
find tfjs -type f \( ! -path "*node_modules*" -a -path "*dist*" -a ! -path "*bazel*" \) \( -name tf[.-]*.js -o -name *.wasm \) | tee -a $LOG
if [ -d $DEST ]; then
  find tfjs -type f \( ! -path "*node_modules*" -a -path "*dist*" -a ! -path "*bazel*" \) \( -name tf[.-]*.js -o -name *.wasm \) -exec cp {} $DEST \;
  find $DEST -maxdepth 1 -type f -exec chmod 644 {} \;
fi
