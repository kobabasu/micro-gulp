'use strict';

import gulp  from 'gulp';
import shell from '/usr/local/lib/node_modules/gulp-shell';
import seq   from 'run-sequence';

const path = {
  src:  './src',
  js:   './src/sample/js',
  dist: './src/sample/dist',
  sass: './sass'
}

gulp.task('babel', shell.task([`
  babel ${path.src} --out-dir ${path.js} --ignore ./sample,./node_modules
`]));

gulp.task('watchify', shell.task([`
  watchify ${path.js}/app.js -o ${path.dist}/build.js -v
`]));

gulp.task('_watch', ['babel'], () => {
  gulp
    .watch([`${path.src}/**/*.*`, `!${path.js}/**/*`, `!${path.dist}/**/*`], ['babel'])
    .on('error', err => process.exit(1));
});

gulp.task('watch', done => seq('_watch', 'watchify', done));
