import gulp from "gulp"
import babel from "gulp-babel"

gulp.task(
  'build',
  () => gulp.src(["**/src/**/*.js", "!**/node_modules/**"])
    .pipe(babel())
    .pipe(gulp.dest('dist'))
)
