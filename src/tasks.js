import gulp from "gulp"
import "./build"
import "./test"
import "./lint"

gulp.task("default", ["test", "build", "lint"])
