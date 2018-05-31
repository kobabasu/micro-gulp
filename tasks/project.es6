'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

import { dir } from '../dir.es6';

class Project extends DefaultRegistry {

  init() {
    // task名の接頭辞を設定
    const prefix = (dir.name == '') ? '' : dir.name + ':';

    /*
     * javascript
     */
    gulp.task(prefix + 'project:js', shell.task([`
      hjson -j ${dir.js.src + '/project.hjson'} | \
      jq -c '.[]' | \
      xargs -I {} cat ${dir.js.src}/modules/{} > ${dir.js.dist + '/project.js'}
    `]));


    /*
     * min
     */
    gulp.task(prefix + 'project:js:min', shell.task([`
      hjson -j ${dir.js.src + '/project.hjson'} | \
      jq -c '.[]' | \
      xargs -I {} cat ${dir.js.src}/modules/{} | uglifyjs -c -o ${dir.js.dist + '/project.min.js'}
    `]));


    /*
     * mocha
     */
    gulp.task(prefix + 'project:mocha', shell.task([`
      mocha ${dir.test}/*.js \
      --require babel-register \
      -g '^(?!EXCLUDE)' \
      --timeout 10000
    `]));


    /*
     * mocha:report
     */
    gulp.task(prefix + 'project:mocha:report', shell.task([`
      mocha ${dir.test}/*.js \
      --require babel-register \
      --reporter mocha-junit-reporter \
      --reporter-options mochaFile=${dir.report} \
      -g '^(?!EXCLUDE)' \
      --timeout 10000
    `]));


    /*
     * mocha:cover
     */
    gulp.task(prefix + 'project:mocha:cover', shell.task([`
      nyc \
      --cache false \
      --reporter=lcov \
      --reporter=text \
      --reporter=cobertura \
      mocha ${dir.test}/*.js \
      --require babel-register \
      -g '^(?!EXCLUDE)' \
      --timeout 10000
    `]));
  }
};

module.exports = new Project();
