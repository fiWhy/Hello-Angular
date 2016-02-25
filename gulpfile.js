/**
 * Created by denis on 25.02.16.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync').create();
var ts = require('gulp-typescript');
var merge = require('merge2');
var config = require('./gulpconfig.js')();
var del = require('del');

gulp.task('default', ['watch-ts', 'watch-less'], function() {
    console.log('Server started');
    browserSync.init({
    		proxy: "http://helloangular.loc",
            files: ["build/**/*.*"],
            port: 80,
    	});
});

gulp.task('watch-ts', function() {
    console.log('Start watch ts!');
    gulp.watch(config.typescript.dev, ['ts-compiler']);
})

gulp.task('ts-compiler' /*, ['clear-js']*/, function() {
    var tsProject = ts.createProject(require('./tsconfig.json'));

    var gConfig =  gulp.src(config.typescript.dev)
        .pipe(ts(tsProject));

        //gConfig.dts.pipe(gulp.dest(config.typescript.description)),
        return gConfig.js.pipe(gulp.dest(config.typescript.build))
});

gulp.task('watch-less'/*, ['clear-css']*/, function() {
    console.log('Start watch less!');
    return gulp.src(config.less.dev)
        .pipe($.watch(config.less.dev))
        .pipe($.less())
        .pipe(gulp.dest(config.less.build));
});

gulp.task('clear-js', function() {
    clear(config.typescript.build + '**/*.js');
});

gulp.task('clear-css', function() {
    clear(config.less.build + '**/*.css');
});

function clear(path) {
    del(path);
}
