var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('sass', function () {
    return gulp.src('stylesheets/scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('stylesheets/css'))
        .pipe(reload({stream:true}));
});


// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("stylesheets/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', reload);
});
