import Showcase from ".";

export default {
  title: "globals/form/showcase",
  component: Showcase,
  argTypes: {}
};

const Template = args => ({
  components: { Showcase },
  setup() {
    return { args };
  },
  template: `<showcase />`
});

export const Story = Template.bind({});
Story.storyName = "default";
Story.args = {};
