const jsfiles = [
  $.path.jquery,
  $.path.js,
];

module.exports = function () {
  $.gulp.task('scripts', function() {
    return $.gulp.src(jsfiles)
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
        .pipe($.gp.concat('all.js'))
        .pipe($.gp.uglify())
        .pipe($.gp.rename('all.min.js'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/videokurs/js'))
        .pipe($.browserSync.stream());
  });
};