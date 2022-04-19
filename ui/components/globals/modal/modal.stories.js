import Modal from ".";

export default {
  title: "globals/modal",
  component: Modal,
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
  components: { Modal },
  setup() {
    return { args };
  },
  template: `<modal v-bind='args' />`
});

export const StoryDefault = Template.bind({});
StoryDefault.storyName = "default";
StoryDefault.args = {
  title: "Title",
  size: "s"
};
