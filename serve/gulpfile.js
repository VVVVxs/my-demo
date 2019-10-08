const debug = require('debug')('server:dev-compile');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const composer = require('gulp-uglify/composer');
const nodemon = require('gulp-nodemon');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const uglifyes = require('uglify-es');

const dist = 'dev';

const minify = composer(uglifyes, console);
const clean = dist => del(`./${dist}`);
const compile = (dist, debug, dev = true) => {
    debug('compiling...');
    const tsProject = ts.createProject('./tsconfig.json');
    let result = gulp.src(['./src/**/*.ts']);

    // 开发模式下初始化 source map
    if (dev) {
        result = result.pipe(sourcemaps.init());
    }
    result = result.pipe(tsProject()).js;
    // 开发模式下编写 source map
    if (dev) {
        result = result.pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../src' }));
    } else {
        result = result.pipe(minify());
    }

    return result.pipe(gulp.dest(`./${dist}`));
}

gulp.task('clean', () => clean(dist));

gulp.task('compile', () => compile(dist, debug));

gulp.task('dev-nodemon', gulp.series('compile', (done) => {
    const devNodeMon = nodemon({
        script: `./${dist}/server.js`,
        watch: ['./src/**/*.ts'],
        env: { NODE_ENV: 'development' }
    });

    devNodeMon.on('restart', () => debug('server has restarted'))
        .on('crash', () => {
            debug('server has crashed! restart in 10s')
            devNodeMon.emit('restart', 10)
        });

    gulp.watch('./src/**/*.ts', () => {
        debug('detecting files changed, recompile');
        compile(dist, debug);
        debug('recompile complete');
        devNodeMon.emit('restart');
    });
    done()
}));

gulp.task('default', gulp.series('clean', 'dev-nodemon'));
