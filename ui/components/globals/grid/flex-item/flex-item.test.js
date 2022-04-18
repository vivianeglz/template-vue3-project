import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import FlexItem from "./index.vue";

const factory = (props = {}) => {
  return render(FlexItem, { props, slots: { default: "Content" } });
};

describe("Flex Item", () => {
  it("Flex Item - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("flex-item");
  });

  it("Flex Item - renders the slot", () => {
    const wrapper = factory();
    return wrapper.getByText("Content");
  });
});
