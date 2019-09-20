module.exports = function () {
  $.gulp.task('js', function () {
    return $.gulp.src('js/main.js')
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.rollup({}, 'iife'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/videokurs/js/'))
        .pipe($.browserSync.stream());
  });
};