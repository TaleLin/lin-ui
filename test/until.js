const path = require('path');

const getComponentPath = (componentPath) => {
  if (typeof componentPath === 'string') componentPath = path.resolve(__dirname, `../dist/${componentPath}/index`);
  return componentPath;
};

module.exports = getComponentPath;