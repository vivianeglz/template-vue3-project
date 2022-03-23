import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import ButtonPrimary from "./index.vue";

const factory = (props = {}) => {
  return render(ButtonPrimary, { props, slots: { default: "Button" } });
};

describe("Button Primary", () => {
  it("Button Primary - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("button-primary");
  });

  it("Button Primary - renders the slot", () => {
    const wrapper = factory();
    return wrapper.getByText("Button");
  });

  it("Button Primary - renders the correct default props", () => {
    const wrapper = factory();
    const button = wrapper.getByTestId("button-primary");
    return button && button.classList.contains("button--s");
  });

  it("Button Primary - renders the correct default template in function of props", () => {
    const wrapper = factory({ size: "m", tag: "a" });
    const button = wrapper.getByTestId("button-primary");
    return button && button.classList.contains("button--m");
  });
});
