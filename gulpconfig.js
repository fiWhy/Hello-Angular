function gulpconfig() {
    var dev = './dev/';
    var build = './app/';
    var dts = './dts/';
    return {
        index: build,
        server: {
            init: build + 'index.js'
        },
        typescript: {
            dev: dev + '**/*.ts',
            build: build,
            description: dts
        },
        less: {
            dev: dev + '**/*.less',
            build: build
        },
        builded: {
            js: [
                build + '**/*.config.js',
                build + '**/routes.js',
                build + '**/*.routes.js',
                '!' + build + '**/*.spec.js'
            ],
            bower: {
                json: require('./bower.json'),
                directory: './bower_components',
                ignorePath: '../..'
            }
        }
    }
};

gulpconfig.prototype.wireDepOptions = function() {
    var cfg = gulpconfig();
    var options = {
        bowerJson: cfg.builded.bower.json,
        directory: cfg.builded.bower.directory,
        ignorePath: cfg.builded.bower.ignorePath
    }
    return options;
};

module.exports = gulpconfig;
