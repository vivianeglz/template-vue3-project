import { ref } from "vue";
import InputText from ".";

export default {
  title: "globals/inputs/input-text",
  component: InputText,
  argTypes: {
    label: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    required: { control: { type: "boolean" } },
    errorMessage: { control: { type: "text" } },
    emptyMessage: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    schema: { control: { type: "object" } },
    disableValidation: { control: { type: "boolean" } },
    name: { control: false },
    isSubmit: { control: false },
    formatter: { control: false },
    additiveValidator: { control: false }
  }
};

const Template = args => ({
  components: { InputText },
  setup() {
    const text = ref(null);
    return { args, text };
  },
  template: `<input-text v-model="text" v-bind='args' name="text" />`
});

export const StoryDefault = Template.bind({});
StoryDefault.storyName = "default";
StoryDefault.args = {
  label: "Label",
  placeholder: "Placeholder",
  required: true,
  errorMessage: "Error message",
  emptyMessage: "Empty message",
  schema: { type: "string", minLength: 1 },
  disableValidation: false,
  disabled: false
};
