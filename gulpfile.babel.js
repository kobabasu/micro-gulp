'use strict';

import gulp from 'gulp';
import shell from '/usr/local/lib/node_modules/gulp-shell';

/*
 * import tasks
 */
import react from './src/gulp/tasks/react.es6';
import sass  from './sass/gulp/tasks/sass.es6';
// import karma from './test/gulp/tasks/karma.es6';
// import e2e   from './e2e/gulp/tasks/e2e.es6';

gulp.registry(react);
gulp.registry(sass);
// gulp.registry(karma);
// gulp.registry(e2e);

/*
 * import admin tasks
 */
// import admin_react from './admin/src/gulp/tasks/react.es6';
// import admin_sass  from './admin/sass/gulp/tasks/sass.es6';
// import admin_karma from './admin/test/gulp/tasks/karma.es6';
// import admin_e2e   from './admin/e2e/gulp/tasks/e2e.es6';

// gulp.registry(admin_react);
// gulp.registry(admin_sass);
// gulp.registry(admin_karma);
// gulp.registry(admin_e2e);
