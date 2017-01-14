var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
         stream: true
    }))
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
});

var uglifycss = require('uglifycss');
 
var uglified = uglifycss.processFiles(
    [ 'app/css/styles.css' ],
    { maxLineLen: 500, expandVars: true }
);
 
console.log(uglified);