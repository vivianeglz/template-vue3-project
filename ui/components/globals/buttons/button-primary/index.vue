<template>
  <component :is="tag" :class="className" v-bind="attrs" data-testid="button-primary" class="button button--primary">
    <slot />
  </component>
</template>

<script>
import ButtonBase from "@components/globals/buttons/button-base/index.vue";

export default {
  name: "ButtonPrimary",
  extends: ButtonBase,
  setup(props, context) {
    return { ...ButtonBase.setup(props, context) };
  }
};
</script>
