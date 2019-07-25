const getConfig = (config) => {
  const {
    name = '',
    color = '#45526B',
    size = 40
  } = { ...config };
  return {
    name,
    color,
    size
  };
};

module.exports = getConfig;