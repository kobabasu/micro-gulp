'use strict';

import gulp  from 'gulp';
import shell from '/usr/local/lib/node_modules/gulp-shell';
import seq   from 'run-sequence';

const path = {
  api:  './api',
  src:  './src',
  js:   './js',
  dist: './dist',
  sass: './sass',
  css:  './css',
  test: './test',
  e2e: './e2e'
}

gulp.task('babel', shell.task([`
  babel ${path.src} --out-dir ${path.js}
`]));

gulp.task('browserify', shell.task([`
  browserify ${path.js}/App.js -o ${path.dist}/build.js -v
`]));

gulp.task('watchify', shell.task([`
  watchify ${path.js}/App.js -o ${path.dist}/build.js -v
`]));

gulp.task('frisby', shell.task([`
  babel ${path.api}/spec/src --out-dir ${path.api}/spec/js;
  jasmine-node ${path.api}/spec/js
`]));

gulp.task('sass', shell.task([`
  sass --no-cache --sourcemap=file ${path.sass}/style.sass:${path.css}/style.css
`]));

gulp.task('docs:sass', shell.task([`
  styledocco -n 'css reference' -o ${path.docs}/sass --preprocessor 'sass' ${path.sass}/*.sass ${path.sass}/*.scss ${path.sass}/**/*.sass
`]));

gulp.task('docs:pages', shell.task([`
  styledocco -n 'css reference' -o ${path.docs}/sass --preprocessor 'sass' ${path.sass}/pages/*.sass ${path.sass}/pages/**/*.sass
`]));

gulp.task('docs:layouts', shell.task([`
  styledocco -n 'css reference' -o ${path.docs}/sass --preprocessor 'sass' ${path.sass}/layouts/*.sass ${path.sass}/layouts/**/*.sass
`]));

gulp.task('karma', shell.task([`
  babel ${path.test}/src --out-dir ${path.test}/spec;
  browserify -v ${path.test}/spec/*.js -o ${path.test}/dist/build.js;
  karma start ${path.test}/karma.conf.js
`]));

gulp.task('e2e', shell.task([`
  protractor ${path.e2e}/protractor.conf.js
`]));

gulp.task('watch:js', ['babel'], () => {
  gulp
    .watch([`${path.src}/**/*.*`, `!${path.js}/**/*`, `!${path.dist}/**/*`], ['babel'])
    .on('error', err => process.exit(1));
});

gulp.task('watch:sass', shell.task([`
  sass -w --no-cache --sourcemap=file ${path.sass}/style.sass:${path.css}/style.css
`]));

gulp.task('watch', done => seq('watch:js', 'watchify', 'watch:sass', done));

gulp.task('test', done => seq('karma', done));

gulp.task('docs', done => seq('docs:sass', 'docs:pages', 'docs:layouts', done));

gulp.task('build', done => seq('babel', 'browserify', done));
