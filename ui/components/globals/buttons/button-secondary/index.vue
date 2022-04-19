<template>
  <component :is="tag" :class="className" v-bind="attrs" data-testid="button-secondary" class="button button--secondary">
    <slot />
  </component>
</template>

<script>
import ButtonBase from "@components/globals/buttons/button-base/index.vue";

export default {
  name: "ButtonSecondary",
  extends: ButtonBase,
  setup(props, context) {
    return { ...ButtonBase.setup(props, context) };
  }
};
</script>
