var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat',function(){
    return gulp.src(['file1.js','file2.js'])
                .pipe(concat('bundle.js'))
                .pipe(gulp.dest(''));
})