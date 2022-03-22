import HeaderPrimary from ".";

export default {
  title: "segments/headers/header-primary",
  component: HeaderPrimary,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { HeaderPrimary },
  setup() {
    return { args };
  },
  template: `<header-primary v-bind='args'/>`,
});

export const Story = Template.bind({});
Story.storyName = "default";
Story.args = {
  title: "Title",
  description: "Some description",
};
