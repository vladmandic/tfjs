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
  cd ..
fi
