import isNil from "./isNil";

describe("Helpers | isNil", () => {
  it("Helpers | isNil - Should return false if value isn't null or undefined", () => {
    expect(isNil(true)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil("")).toBe(false);
    expect(isNil(0)).toBe(false);
  });

  it("Helpers | isNil - Should return true if value is null or undefined", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
});
