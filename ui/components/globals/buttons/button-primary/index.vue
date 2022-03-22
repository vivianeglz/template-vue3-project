<template>
  <component
    :is="tag"
    :class="className"
    v-bind="attrs"
    class="button button--primary"
  >
    <slot />
  </component>
</template>

<script>
import { toRef, computed, reactive } from "vue";

export default {
  name: "ButtonPrimary",
  props: {
    tag: {
      type: String,
      default: "button",
      validator: (value) => {
        return ["button", "a", "nuxt-link"].includes(value);
      },
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return ["s", "m"].includes(value);
      },
    },
  },
  setup(props, context) {
    const size = toRef(props, "size");
    const className = computed(() => `button--${size.value}`);
    return { className, attrs: context.attrs };
  },
};
</script>
