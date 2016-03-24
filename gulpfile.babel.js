'use strict';

import gulp from 'gulp';
import shell from '/usr/local/lib/node_modules/gulp-shell';

/**
 * react
 */
import react from './gulp/react.es6';
gulp.registry(react);

/**
 * sass
 */
import sass from './gulp/sass.es6';
gulp.registry(sass);

/**
 * karma
 */
import karma from './gulp/karma.es6';
gulp.registry(karma);

/**
 * e2e (protractor)
 */
import e2e from './gulp/e2e.es6';
gulp.registry(e2e);


/**
 * gulp watch
 */
gulp.task('watch', shell.task([`
  tput setaf 36 && echo '\n  gulp watch: empty task. \n'
`]));

/**
 * gulp build
 */
gulp.task('build', shell.task([`
  tput setaf 36 && echo '\n  gulp build: empty task. \n'
`]));
