import validator from ".";
import { schemaExample } from "@common/constants/schemas";

const correctData = {
  label: "Title",
  date: "2022-04-20T14:59:18.093Z"
};

const incorrectData = {
  missingField: {
    date: "2022-04-20T14:59:18.093Z"
  },
  invalidLabel: {
    label: null,
    date: "2022-04-20T14:59:18.093Z"
  },
  invalidDate: {
    label: "Title",
    date: "9999-99-99T00:00:00.000+00:00"
  }
};

describe("Services | validator", () => {
  it("Services | validator - Schema : Should return true when schema is fulfilled", () => {
    expect(validator.validate(schemaExample, correctData)).toBe(true);
  });

  it("Services | validator -  Schema : Should return false when schema is not fulfilled", () => {
    expect(validator.validate(schemaExample, incorrectData.missingField)).toBe(false);
  });

  it("Services | validator -  Schema : Should return false when schema is not fulfilled", () => {
    expect(validator.validate(schemaExample, incorrectData.invalidLabel)).toBe(false);
  });

  it("Services | validator -  Schema : Should return false when schema is not fulfilled", () => {
    expect(validator.validate(schemaExample, incorrectData.invalidDate)).toBe(false);
  });

  it("Services | validator -  Errors : Should return null when schema is fulfilled", () => {
    validator.validate(schemaExample, correctData);
    expect(validator.errors).toBe(null);
  });

  it("Services | validator -  Errors : Should return an array when schema is not fulfilled", () => {
    validator.validate(schemaExample, incorrectData.missingField);
    expect(Array.isArray(validator.errors)).toBe(true);
  });

  it("Services | validator -  ErrorsText : Should return null when schema is fulfilled", () => {
    validator.validate(schemaExample, correctData);
    expect(validator.errorsText()).toBe(null);
  });

  it("Services | validator -  ErrorsText : Should return string when schema is not fulfilled", () => {
    validator.validate(schemaExample, incorrectData.missingField);
    expect(typeof validator.errorsText()).toBe("string");
  });
});
