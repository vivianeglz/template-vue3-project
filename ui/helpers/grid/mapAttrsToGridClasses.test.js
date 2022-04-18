import mapAttrsToGridClasses from "./mapAttrsToGridClasses";

describe("Helpers | mapAttrsToGridClasses", () => {
  it("Helpers | mapAttrsToGridClasses - Should return empty string if attrs are undefined or incorrect", () => {
    expect(mapAttrsToGridClasses()).toBe("");
    expect(mapAttrsToGridClasses({})).toBe("");
    expect(mapAttrsToGridClasses([])).toBe("");
    expect(mapAttrsToGridClasses(false)).toBe("");
  });

  it("Helpers | mapAttrsToGridClasses - Should return valid html grid classes", () => {
    expect(mapAttrsToGridClasses({ s12: "" }, "grid__col")).toBe("grid__col--s12");
    expect(mapAttrsToGridClasses({ s12: "", m6: "" }, "grid__col")).toBe("grid__col--s12 grid__col--m6");
    expect(mapAttrsToGridClasses({ "gutter-m": "" }, "grid")).toBe("grid--gutter-m");
  });
});
