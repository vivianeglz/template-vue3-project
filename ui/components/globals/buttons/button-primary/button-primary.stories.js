import ButtonPrimary from ".";

export default {
  title: "globals/buttons/button-primary",
  component: ButtonPrimary,
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
  components: { ButtonPrimary },
  setup() {
    return { args };
  },
  template: `<button-primary v-bind='args'>Button</button-primary>`
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
