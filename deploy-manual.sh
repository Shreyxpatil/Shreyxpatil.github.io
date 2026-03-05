#!/usr/bin/env bash
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# Set git config for deployment
git init
git add -A
git commit -m "deploy dist"
# push to the gh-pages branch
git push -f https://github.com/Shreyxpatil/Shreyxpatil.github.io.git master:gh-pages
cd -
