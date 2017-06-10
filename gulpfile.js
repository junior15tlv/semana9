var gulp =  require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
imagemin = require("gulp-imagemin");

gulp.task('default',['demo','imagenmin']);
gulp.task('demo',function(){
gulp.src('js/source/*.js')
.pipe(concat('compilado.js'))
.pipe(uglify())
.pipe(gulp.dest('js/build/'))

});


gulp.task("imagenmin",function(){
gulp.src("img/**/*.png")
.pipe(imagemin())
.pipe(gulp.dest("imagenes"))

});