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
  cd src
  if [ -f tfjs.code-workspace]; then rm tfjs.code-workspace; fi
  cd ..
fi
