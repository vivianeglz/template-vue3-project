import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import FlexContainer from "./index.vue";

const factory = (props = {}) => {
  return render(FlexContainer, { props, slots: { default: "Content" } });
};

describe("Flex Container", () => {
  it("Flex Container - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("flex-container");
  });

  it("Flex Container - renders the slot", () => {
    const wrapper = factory();
    return wrapper.getByText("Content");
  });
});
