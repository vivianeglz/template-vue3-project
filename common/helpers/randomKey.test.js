import randomKey from "./randomKey";

describe("Helpers | randomKey", () => {
  it("Helpers | randomKey - Should return string", () => {
    expect(typeof randomKey()).toBe("string");
  });

  it("Helpers | randomKey - Should return a 6-character string", () => {
    expect(randomKey().length).toBe(6);
  });

  it("Helpers | randomKey - Should return different string", () => {
    const test1 = randomKey();
    const test2 = randomKey();
    expect(test1 === test2).toBe(false);
  });
});
