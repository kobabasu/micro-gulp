# micro-gulp
容量節約のため、gulp, run-sequenceなど  
必須なもの以外はnpm globalを利用  
現在のディレクトリに展開させたいためcloneは以下

```
git init
git remote add origin git@github.com-kobabasu:kobabasu/micro-gulp.git
git fetch origin
git checkout master (またはdevelop)
```

## sass
1. `git clone git@github.com-kobabasu:kobabasu/micro-flux.git src`
1. `cd sass`
1. micro-sassのREADME.mdを参照しinstall

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. package.jsonを確認 
1. micro-sassのREADME.mdを確認しながらpackage.jsonを編集
1. micro-fluxのREADME.mdを確認しながらpackage.jsonを編集 (preinstallをsassのものと融合)
1. `npm setup`
1. `npm install`
1. `npm run build:sass` (package.jsonを編集後)
1. `npm run build:src` (package.jsonを編集後)

## gulp
1. babel, browserify(watchify)がsampleで用意
1. src, sampleディレクトリがあることが前提

## check
1. `npm run watch`が動いている前提
1. `gulp watch`を実行
1. `gulp watch:sass`を実行
