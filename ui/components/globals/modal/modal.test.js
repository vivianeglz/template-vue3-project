import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import Modal from "./index.vue";

const factory = (props = {}) => {
  return render(Modal, { props, slots: { default: "Content", footer: "Footer" } });
};

describe("Modal", () => {
  it("Modal - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("modal");
  });

  it("Modal - renders the slot", () => {
    const wrapper = factory();
    return wrapper.getByText("Content") && wrapper.getByText("Footer");
  });

  it("Modal - renders the correct default props", () => {
    const wrapper = factory();
    const container = wrapper.getByTestId("modal-container");
    return container && container.classList.contains("modal__container--s");
  });

  it("Modal - renders the correct size", () => {
    const wrapper = factory({ size: "m" });
    const container = wrapper.getByTestId("modal-container");
    return container && container.classList.contains("modal__container--m");
  });

  it("Modal - renders the correct title", () => {
    const wrapper = factory({ title: "It's a test modal" });
    return wrapper.getByText("It's a test modal");
  });
});
