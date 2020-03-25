var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// js file paths
var utilJsPath = 'main/assets/js'; // util.js path - you may need to update this if including the framework as external node module
var componentsJsPath = 'main/assets/js/components/*.js'; // component js files
var scriptsJsPath = 'main/assets/js'; //folder for final scripts.js/scripts.min.js files

// css file paths
var cssFolder = 'main/assets/css'; // folder for final style.css/style-custom-prop-fallbac.css files
var scssFilesPath = 'main/assets/sass/**/*.scss'; // scss files to watch

function reload(done) {
    browserSync.reload();
    done();
}

gulp.task('sass', function () {
    return gulp.src(scssFilesPath)
        .pipe(sassGlob())
        .pipe(sass({ outputStyle: 'nested' }).on('error', sass.logError))
        .pipe(gulp.dest(cssFolder))
        .pipe(browserSync.reload({
            stream: true
        }))
        // .pipe(rename('style-fallback.css'))
        .pipe(gulp.dest(cssFolder));
});

gulp.task('scripts', function () {
    return gulp.src([componentsJsPath, utilJsPath + '/util.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(scriptsJsPath))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(scriptsJsPath))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', gulp.series(function (done) {
    browserSync.init({
        server: {
            baseDir: 'main'
        },
        notify: false
    })
    done();
}));

gulp.task('watch', gulp.series(['browserSync', 'sass', 'scripts'], function () {
    gulp.watch('main/*.html', gulp.series(reload));
    gulp.watch('main/assets/sass/**/*.scss', gulp.series(['sass']));
    gulp.watch(componentsJsPath, gulp.series(['scripts']));
}));
