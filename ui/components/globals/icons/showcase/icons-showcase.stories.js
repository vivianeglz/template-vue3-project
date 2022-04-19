import Showcase from ".";

export default {
  title: "globals/icons/showcase",
  component: Showcase,
  argTypes: {
    color: {
      options: ["dark", "light", "colored"],
      control: { type: "select" }
    }
  }
};

const Template = args => ({
  components: { Showcase },
  setup() {
    return { args };
  },
  template: `<showcase v-bind='args' />`
});

export const Story = Template.bind({});
Story.storyName = "default";
Story.args = {
  color: "dark"
};
