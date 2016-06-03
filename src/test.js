import gulp from "gulp"
import mocha from "gulp-spawn-mocha"

const IS_DEBUG = process.env.NODE_ENV === "debug"

gulp.task(
  'test',
  () => gulp.src(["**/test/*.js"], {read: false})
    .pipe(mocha({
      debugBrk: IS_DEBUG,
      R: "spec",
    }))
)
