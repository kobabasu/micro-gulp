# micro-gulp
容量節約のため、gulp, run-sequenceなど  
必須なもの以外はnpm globalを利用  
現在のディレクトリに展開させたいためcloneは以下

```
git init
git remote add git@github.com-kobabasu:kobabasu/micro-gulp.git
git fetch origin
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. package.jsonを確認  
1. `npm install`

## gulp
1. babel, browserify(watchify)がsampleで用意
1. src, sampleディレクトリがあることが前提
1. `npm run watch`

## check
1. `npm run watch`が動いている前提
1. src/ディレクトリ内のファイルを編集
1. http://localhost:8080/src/sampleで確認  
   もしくは`open sample/index.html -a Google\ Chrome`
