/**
 * Checks if value is null or undefined.
 * example : isNil(null) => true
 *
 * @param {*} value Value to check
 * @returns {Boolean}
 */
const isNil = value => {
  return value == null;
};

export default isNil;
