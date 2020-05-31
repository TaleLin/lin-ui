// eslint-disable-next-line no-undef
export default Behavior({
  definitionFilter(defFields) {
    const {
      properties
    } = defFields;
    const propsKey = Object.keys(properties);
    propsKey.forEach(name => {
      const {
        options
      } = properties[name];
      if (options) {
        properties[name].observer = function (newValue) {
          if (!options.includes(newValue) && newValue) {
            console.error(`${name}: ${newValue} must be in the [${options}]`);
          }
        };
      }
    });
  }
});