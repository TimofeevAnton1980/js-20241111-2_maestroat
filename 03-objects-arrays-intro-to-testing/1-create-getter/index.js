/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fields = path.split('.');
  return function (product) {
    return fields.reduce((acc, key) => {
      if (acc && product.hasOwnProperty.call(acc, key)) {
        return acc[key];
      }
      return undefined;
    }, product);
  };
}
