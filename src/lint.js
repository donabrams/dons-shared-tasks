import gulp from "gulp"
import eslint from "gulp-eslint"

gulp.task(
  'lint',
  () => gulp.src(["**/*.js"], {read: false})
    .pipe(eslint())
    .pipe(gulp.dest('dist'))
)
