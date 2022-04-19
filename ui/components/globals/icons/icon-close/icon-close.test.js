import { render } from "@testing-library/vue";
import { describe, it } from "vitest";
import IconClose from "./index.vue";

const factory = (props = {}) => {
  return render(IconClose, { props });
};

describe("Icon Close", () => {
  it("Icon Close - should correctly mounted", () => {
    const wrapper = factory();
    return wrapper.getByTestId("icon-close");
  });
});
