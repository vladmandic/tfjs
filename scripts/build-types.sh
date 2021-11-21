#!/bin/bash
set -e

# build  in types/lib/<module>/<file>.t.ds for all targets
node_modules/.bin/tsc --project types/tsconfig.json
# build types/tfjs-core.d.ts
node_modules/.bin/api-extractor run --local --verbose --config types/api-tfjs-core.json
# build types/tfjs.d.ts
node_modules/.bin/api-extractor run --local --verbose --config types/api-tfjs.json
# patch types/tfjs.d.ts
sed -i 's/\@tensorflow\/tfjs-core/\.\/tfjs-core/' types/tfjs.d.ts

echo "done..."
