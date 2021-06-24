// 引入压缩需要的插件
const 压缩器 = require('gulp');
const 压缩JS = require('gulp-uglify');
const 压缩CSS = require('gulp-clean-css');
const 压缩HTML = require('gulp-htmlmin');
const 头部注释 = ['/** 就用中文写代码，哎嘿☆ */\n <%= js %>', { js: ';' }];

// 压缩js
压缩器.task('js', function () {
    return 压缩器.src('./src/*.js') // 输入文件
        .pipe(压缩JS()) // 执行压缩
        .pipe(header.apply(null, 头部注释)) //添加头部注释
        .pipe(压缩器.dest('dist/js')); // 输出文件
});

// 压缩css
压缩器.task('css', async () => {
    await 压缩器.src('./src/*.css') // 输入文件
        .pipe(压缩CSS()) // 执行压缩
        .pipe(压缩器.dest('./dist/')); // 输出文件
});

// 压缩html
压缩器.task('html', async () => {
    await 压缩器.src('./src/*.html') // 输入文件
        .pipe(压缩HTML()) // 执行压缩
        .pipe(压缩器.dest('./dist/')); // 输出文件
});
