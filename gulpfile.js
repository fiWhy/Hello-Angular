/**
 * Created by denis on 25.02.16.
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var browserSync = require('browser-sync').create();
var ts = require('gulp-typescript');
var merge = require('merge2');
var config = require('./gulpconfig.js')();
var nodemon = require('gulp-nodemon');
var del = require('del');
var wiredep = require('wiredep').stream;

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

gulp.task('wiredep', function() {
   var options = config.wireDepOptions();
   return gulp.src('index.html')
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.builded.js)))
        .pipe(gulp.dest(config.index));
});

gulp.task('clear-js', function() {
    clear(config.typescript.build + '**/*.js');
});

gulp.task('clear-css', function() {
    clear(config.less.build + '**/*.css');
});

gulp.task('start', function() {
    nodemon({
    script: 'server.js', 
    ext: 'js html', 
    env: { 'NODE_ENV': 'development' }
  })
})

function clear(path) {
    del(path);
}
