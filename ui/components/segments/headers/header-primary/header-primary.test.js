import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import HeaderPrimary from "./index.vue";

const factory = (props = {}) => {
  return render(HeaderPrimary, {
    props
  });
};

describe("Header primary", () => {
  it("Header primary - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("header-primary");
  });
});
