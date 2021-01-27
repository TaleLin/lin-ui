const {
  buildWxss,
  buildWxml,
  buildImage,
  buildJson,
  buildJs,
  copyStatic,
  clean,
  copy
} = require('./task');
const {
  series,
  parallel,
  watch
} = require('gulp');
const path = require('path');

const componentData = require('./until');
const result = `{common/**,core/**,behaviors,utils,${componentData()}}`;
const isCustom = (result !== '{common/**,core/**,behaviors,utils,}');

const distPath = path.resolve(__dirname, '../dist');
const examplePath = path.resolve(__dirname, '../examples/dist');
const srcPrefix = path.resolve(__dirname, '../src');
const srcDevPath = `${srcPrefix}/**`;
const srcProPath = isCustom ? `${srcPrefix}/${result}` : srcDevPath;

module.exports = {
  build: series(
    clean(`${distPath}/**/*`),
    parallel(
      buildWxss(
        `${srcProPath}/*.less`,
        `!${srcProPath}/_*.less`,
        distPath
      ),
      buildWxml(
        `${srcProPath}/*.wxml`,
        `!${srcProPath}/_*.wxml`,
        distPath
      ),
      buildImage(
        `${srcProPath}/*.png`,
        distPath
      ),
      buildJson(
        `${srcProPath}/*.json`,
        distPath
      ),
      buildJs(
        `${srcProPath}/*.js`,
        distPath
      ),
      copyStatic(
        srcProPath,
        distPath
      )
    )
  ),
  dev: series(
    clean(`${examplePath}/**/*`),
    parallel(
      buildWxss(
        `${srcDevPath}/*.less`,
        `!${srcDevPath}/_*.less`,
        examplePath
      ),
      copyStatic(
        srcDevPath,
        examplePath,
        'dev'
      )
    )
  ),
  watch: parallel(
    () => {
      watch('../src/**/*.less', buildWxss(`${srcDevPath}/*.less`, `!${srcDevPath}/_*.less`, examplePath));
      watch('../src/**/*.wxml', copy(srcDevPath, examplePath, 'wxml'));
      watch('../src/**/*.wxs', copy(srcDevPath, examplePath, 'wxs'));
      watch('../src/**/*.json', copy(srcDevPath, examplePath, 'json'));
      watch('../src/**/*.js', copy(srcDevPath, examplePath, 'js'));
    }
  )
};
