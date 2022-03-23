import PageExample from ".";

export default {
  title: "pages/page-example",
  component: PageExample,
  argTypes: {}
};

const Template = args => ({
  components: { PageExample },
  setup() {
    return { args };
  },
  template: `<page-example />`
});

export const Story = Template.bind({});
Story.storyName = "default";
