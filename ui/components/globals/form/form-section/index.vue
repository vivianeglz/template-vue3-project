<template>
  <fieldset class="form-base__section">
    <slot :onValidation="onValidation" :submit="submit"></slot>
  </fieldset>
</template>

<script>
import { inject } from "vue";
export default {
  name: "FormSection",
  setup() {
    const submit = inject("submit");
    const onValidation = inject("onValidation");
    return { submit, onValidation };
  }
};
</script>
