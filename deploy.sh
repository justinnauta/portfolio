#!/usr/bin/env sh

# abort on errors
set -e

npm run build

cd dist

echo 'justinnauta.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:justinnauta/portfolio.git master:gh-pages

cd -