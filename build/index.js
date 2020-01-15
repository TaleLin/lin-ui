const {
  buildWxss,
  copyStatic,
  clean,
  copy
} = require('./build');
const {
  series,
  parallel,
  watch
} = require('gulp');
const path = require('path');

const componentData = require('./until');
const result = `{common/*,behaviors,utils,${componentData()}}`;
const isCustom = (result !== `{common/*,behaviors,utils,}`);

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
        examplePath
      )
    )
  ),
  watch: parallel(
    () => {
      watch(`${srcDevPath}/*.less`, buildWxss(`${srcDevPath}/*.less`, `!${srcDevPath}/_*.less`, examplePath));
      watch(`${srcDevPath}/*.wxml`, copy(srcDevPath, examplePath, 'wxml'));
      watch(`${srcDevPath}/*.wxs`, copy(srcDevPath, examplePath, 'wxs'));
      watch(`${srcDevPath}/*.json`, copy(srcDevPath, examplePath, 'json'));
      watch(`${srcDevPath}/*.js`, copy(srcDevPath, examplePath, 'js'));
    }
  )
};
