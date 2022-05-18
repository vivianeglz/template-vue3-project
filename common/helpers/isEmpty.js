/**
 * Checks if value is empty
 * example : isNil(null) => true
 *
 * @param {*} value Value to check
 * @returns {Boolean}
 */
const isEmpty = value => {
  switch (true) {
    case value == null:
      return true;

    case Array.isArray(value) || typeof value === "string":
      return !value.length;

    case ["boolean", "number"].includes(typeof value):
      return false;

    case value != null && value.constructor.name === "Object":
      return !Object.keys(value).length;

    default:
      return false;
  }
};

export default isEmpty;
