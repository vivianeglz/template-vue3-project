import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import PageExample from "./index.vue";

const factory = (props = {}) => {
  return render(PageExample, { props });
};

describe("Page example", () => {
  it("Page example - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("page-example");
  });
});
