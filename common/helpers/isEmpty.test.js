import isEmpty from "./isEmpty";

describe("Helpers | isEmpty", () => {
  it("Helpers | isEmpty - Should return false if value isn't empty", () => {
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty({ a: "" })).toBe(false);
    expect(isEmpty([""])).toBe(false);
    expect(isEmpty("a")).toBe(false);
  });

  it("Helpers | isEmpty - Should return true if value is empty", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty("")).toBe(true);
  });
});
