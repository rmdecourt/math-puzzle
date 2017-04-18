/**
 * Imports
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var pug = require('gulp-pug');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

/**
 * Path variables
 */
var path = {
    'typescript': {
        'source': './src/typescript/**/*.ts',
        'destination': './dist/js/'
    },
    'pug': {
        'source': './src/pug/**/*.pug',
        'destination': './dist/'
    },
    'sass': {
        'source': './src/sass/**/*.scss',
        'destination': './dist/css/'
    }
};

/**
 * Pug Configuration
 */
gulp.task('pug', function() {
    return gulp.src(path.pug.source)
        .pipe(pug()).on('error', function(err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(gulp.dest(path.pug.destination));
});

gulp.task('pug:watch', function() {
    gulp.watch(path.pug.source, ['pug']);
});

/**
 * Typescript configuration
 */
gulp.task('typescript', function() {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult =  gulp.src(path.typescript.source)
        .pipe(tsProject(ts.reporter.fullReporter())).on('error', function(err) {
            gutil.log(err);
            this.emit('end');
        });
    return tsResult.js.pipe(uglify())
        .pipe(gulp.dest(path.typescript.destination));
});

gulp.task('typescript:watch', function() {
    gulp.watch(path.typescript.source, ['typescript']);
});

/**
 * SASS Configuration
 */
gulp.task('sass', function() {
    return gulp.src(path.sass.source)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(path.sass.destination));
});

gulp.task('sass:watch', function() {
    gulp.watch(path.sass.source, ['sass']);
});

/**
 * Defaults
 */
gulp.task('default', ['pug', 'typescript', 'sass']);
gulp.task('watch', ['pug:watch', 'typescript:watch', 'sass:watch']);
