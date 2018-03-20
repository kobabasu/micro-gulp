# micro-gulp
容量節約のため、npmのローカルにはgulpのみ  
必須なもの以外はnpm globalを利用  

## 現在のディレクトリに展開させる場合

```
git init
git remote add origin git@github.com-kobabasu:kobabasu/micro-gulp.git
git fetch origin
git checkout master (またはdevelop)
```

## 既に存在するディレクトリにインストールする場合

```
git clone git@github.com-kobabasu:kobabasu/micro-gulp.git gulp 
mv gulp/gulpfile.babel.js ./
mv gulp/.babelrc ./
```
1. gulpfile.babel.jsのimportのパスを変更
1. その後、存在するpackage.jsonを編集

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`

## run
1. gulpfile.babel.jsを編集する
1. `gulp watch`, `gulp build`などを実行

## 各ライブラリをinstall
### react
1. `git clone git@github.com-kobabasu:kobabasu/micro-flux.git src`
1. `cd src`
1. micro-fluxのREADME.mdを参照しinstall

### lib
1. `git clone git@github.com-kobabasu:kobabasu/micro-lib.git lib`
1. `cd lib`
1. micro-libのREADME.mdを参照しinstall

### postcss
1. `git clone git@github.com-kobabasu:kobabasu/micro-postcss.git postcss`
1. `cd postcss`
1. micro-postcssのREADME.mdを参照しinstall

### specs
1. `git clone git@github.com-kobabasu:kobabasu/micro-specs.git specs`
1. `cd specs`
1. micro-specsのREADME.mdを参照しinstall

### schema
1. `git clone git@github.com-kobabasu:kobabasu/micro-schema.git schema`
1. `cd schema`
1. micro-schemaのREADME.mdを参照しinstall

## tasks
各タスクは各レポジトリ内のgulp/tasks内にある。  
`gulp --tasks`で確認
