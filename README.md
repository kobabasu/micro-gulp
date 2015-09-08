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

## flux
1. `git clone git@github.com-kobabasu:kobabasu/micro-flux.git src`
1. `cd src`
1. micro-fluxのREADME.mdを参照しinstall

## sass
1. `git clone git@github.com-kobabasu:kobabasu/micro-sass.git sass`
1. `cd sass`
1. micro-sassのREADME.mdを参照しinstall

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm run build:sass`
1. `npm run build:src`

## check
1. `npm run watch`が動いている前提
1. `gulp watch`を実行
1. `gulp watch:sass`を実行
