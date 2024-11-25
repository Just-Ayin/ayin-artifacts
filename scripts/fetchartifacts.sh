#!/bin/bash

REPO_URL=$1
IDENTITY_FILE=$2

ssh-agent sh -c "ssh-add $IDENTITY_FILE; git clone $REPO_URL temp"

rm -r artifacts
cp -r temp/artifacts artifacts
mkdir -p contracts/clamm
cp -r temp/contracts/clamm/library contracts/clamm
rm -rf temp

# remove Test contract references
find artifacts -name '*Test.ral.json' -exec rm {} \;
find artifacts -name '*Test.ts' -exec rm {} \; 

# cleanup index.ts
grep -v "Test" artifacts/ts/index.ts > temp && mv temp artifacts/ts/index.ts
