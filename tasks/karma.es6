'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class Karma extends DefaultRegistry {

  init() {
    let test = './test/karma.conf.js';

    gulp.task('karma', shell.task([`
      karma start ${test}
    `]));
  }
};

module.exports = new Karma();
