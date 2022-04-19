import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import ButtonSecondary from "./index.vue";

const factory = (props = {}) => {
  return render(ButtonSecondary, { props, slots: { default: "Button" } });
};

describe("Button Secondary", () => {
  it("Button Secondary - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("button-secondary");
  });

  it("Button Secondary - renders the slot", () => {
    const wrapper = factory();
    return wrapper.getByText("Button");
  });

  it("Button Secondary - renders the correct default props", () => {
    const wrapper = factory();
    const button = wrapper.getByTestId("button-secondary");
    return button && button.classList.contains("button--s");
  });

  it("Button Secondary - renders the correct default template in function of props", () => {
    const wrapper = factory({ size: "m", tag: "a" });
    const button = wrapper.getByTestId("button-secondary");
    return button && button.classList.contains("button--m");
  });
});
