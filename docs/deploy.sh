#!/bin/bash

npm run build

cd dist

git init
git add .
git commit -m "deploy"
git push -f https://github.com/gitbu/wc-ui.git master:gh-pages

cd -
