#安装使用
###1、创建项目
```shell 
makdir karma-jasmine
cd karma-jasmine
npm init
```
###2、安装必要的包
```shell
npm i karma --save
npm i karma-jasmine --save
npm i karma-chrome-launcher --save
npm i karma-coverage --save
npm i jasmine-core --save
```

###3、创建被测试文件
新建js文件夹，进入js文件夹新建文件index.js、index2.js、index3.js、jasmineTest.js
在index.js中添加内容
```javascript
function test () {
  return 'abc';
}

function test4 () {
  return 333;
}
```
在index2.js中添加
```javascript
function test22 () {
  return 'test2'
}

// 这里采用了es6的写法
const test2 = ()=>'test2'
```

在index3.js中添加
```javascript
function test3 () {
  return 'ccc'
}
```
在jasmineTest.js中添加
describe('测试基本函数', function () {
  it('测试test函数', function () {
    expect('abc').toEqual(test())
  })

  it('测试test2函数', function () {
    expect('test2').toEqual(test2())
  })

  it('测试test3函数', function () {
    expect('test3').toEqual(test3())
  })
})

###4、创建测试文件
进入karma-jasmine目录，传键test文件夹,执行命令 karma init 初始化karma配置文件
创建之后在test目录中会有一个karma.conf.js文件。
打开karma.conf.js稍做修改
```javascript
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../js',// 基本路径

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['jasmine', 'requirejs'],
    frameworks: ['jasmine'],//测试框架

    // list of files / patterns to load in the browser
    files: [
      '*.js'
    ],// 测试文件

    // list of files to exclude
    exclude: [
    ],//不包括的文件

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../js/*.js': 'coverage'
    },//预处理器，用来加载一些插件

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'
      ,'coverage'
    ],//报表列表

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome'
      ,'Firefox'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

###5、开始测试
在命令行中执行 karma start,会自动启动浏览器，在控制台中可以看到测试的结果

###6、单元测试覆盖率
当我们输入karma start时会自动生成一个coverage文件夹，直接打开index.html可以查看测试报表。
其中为粉色背景的没有测试的函数
