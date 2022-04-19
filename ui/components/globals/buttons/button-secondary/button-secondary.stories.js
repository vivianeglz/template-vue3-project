import ButtonSecondary from ".";

export default {
  title: "globals/buttons/button-secondary",
  component: ButtonSecondary,
  argTypes: {
    tag: {
      control: false
    },
    size: {
      options: ["s", "m"],
      control: { type: "select" }
    },
    disabled: { control: { type: "boolean" } }
  }
};

const Template = args => ({
  components: { ButtonSecondary },
  setup() {
    return { args };
  },
  template: `<button-secondary v-bind='args'>Button</button-secondary>`
});

export const StoryDefault = Template.bind({});
StoryDefault.storyName = "default";
StoryDefault.args = {
  disabled: false,
  size: "s"
};

export const StoryLarge = Template.bind({});
StoryLarge.storyName = "large";
StoryLarge.args = {
  disabled: false,
  size: "m"
};

export const StoryDisabled = Template.bind({});
StoryDisabled.storyName = "disabled";
StoryDisabled.args = {
  disabled: true,
  size: "s"
};
