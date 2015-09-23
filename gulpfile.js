/**
 * Created by Aaron.goshine on 25/09/15.
 */

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");


gulp.task("build",function(){
  gulp.src("src/*.js")
    .pipe(concat("main.js"))
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))

});

gulp.task("copy",function(){
  //gulp.src("src/SpectRunner.html", "build/index.htm");
});

gulp.task("test",function(){

});

gulp.task("default",["build","copy"]);
