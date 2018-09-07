var gulp = require('gulp'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    browserSync = require('browser-sync');

gulp.task('less', function () {
    return gulp.src('app/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: { 
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/less/style.less', ['less']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('build', ['less'], function() {

    var buildCss = gulp.src([
        'app/css/style.css'
        ])
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'))
    
    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});