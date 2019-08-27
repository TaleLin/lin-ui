const { dest, src } = require('gulp');

const copy = (path) => src(path).pipe(dest());

const del = (path) => src(path).pipe(dest());

exports = {
  copy,
  del
};