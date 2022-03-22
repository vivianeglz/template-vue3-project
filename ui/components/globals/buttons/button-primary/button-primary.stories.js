import ButtonPrimary from ".";

export default {
  title: "globals/buttons/button-primary",
  component: ButtonPrimary,
  argTypes: {
    tag: {
      control: false,
    },
    size: {
      options: ["s", "m"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
  },
};

const Template = (args) => ({
  components: { ButtonPrimary },
  setup() {
    return { args };
  },
  template: `<button-primary v-bind='args'>Découvrir</button-primary>`,
});

export const Story = Template.bind({});
Story.storyName = "default";
Story.args = {
  disabled: false,
  size: "s",
};
