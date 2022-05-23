import ModalInfo from ".";

export default {
  title: "globals/modals/modal-info",
  component: ModalInfo,
  argTypes: {
    title: {
      control: { type: "text" }
    },
    size: {
      options: ["s", "m", "l"],
      control: { type: "select" }
    }
  }
};

const Template = args => ({
  components: { ModalInfo },
  setup() {
    return { args };
  },
  template: `<modal-info v-bind='args' />`
});

export const StoryDefault = Template.bind({});
StoryDefault.storyName = "default";
StoryDefault.args = {
  title: "Title",
  size: "s"
};
