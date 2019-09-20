module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
      'fonts/**/*.{woff,woff2}',
      'img/**',
      '*.html',
      'part1/**',
      'part2/**',
      'part3/**',
      'part4/**',
      'bonus1/**',
      'bonus2/**',
      'bonus3/**',
      'bonus4/**',
      'bonus5/**',
      'bonus6/**',
      'bonus7/**',
      'bonus8/**',
      'bonus9/**',
      'bonus10/**',
      'bonus11/**',
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build/videokurs'));

  });
};