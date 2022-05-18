import ZSchema from "z-schema";
const zSchema = new ZSchema();

const Validator = function () {
  this.errors = null;

  /**
   * Validate data using schema
   * @this   Validator the validator instance
   * @param  {Object} schema to validate data against
   * @param  {Any} data to be validated
   * @return {Boolean} validation result. Errors from the last validation will be available in `validator.errors`.
   */
  this.validate = function (schema, data) {
    const valid = zSchema.validate(data, schema);

    if (valid) {
      this.errors = null;
      return true;
    }

    this.errors = zSchema.getLastErrors();
    return false;
  };

  /**
   * Provide stringified error messages from all errors thrown by validate method
   * This pattern is used to emulate AJV textErrors() API
   * @this   Validator the validator instance
   * @return {String | null} Stringified errors if errors is not null, otherwise null
   */
  this.errorsText = function () {
    return this.errors
      ? this.errors
          .map(error => {
            let message = "";

            if (error.path) message += `Property ${error.path.replace("#/", "")} - `;
            if (error.code) message += `[${error.code}] -`;
            if (error.message) message += ` ${error.message}`;

            return message;
          })
          .join("\n")
      : null;
  };
};

const validator = new Validator();

export default validator;
