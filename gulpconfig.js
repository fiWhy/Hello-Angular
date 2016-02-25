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
        }
    }
};

module.exports = gulpconfig;
