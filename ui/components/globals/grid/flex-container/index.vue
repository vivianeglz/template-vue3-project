<template>
  <component :is="tag" :class="className" v-bind="attrs" data-testid="flex-container">
    <slot />
  </component>
</template>

<script>
import { computed } from "vue";
import mapAttrsToGridClasses from "@ui/helpers/grid/mapAttrsToGridClasses";

export default {
  name: "FlexContainer",
  props: {
    tag: {
      type: String,
      default: "div",
      validator: value => {
        return ["div", "ul", "section", "article", "nav", "p", "li", "a", "button", "nuxt-link", "section", "article", "span"].includes(value);
      }
    }
  },
  setup(props, context) {
    const className = computed(() => `grid ${mapAttrsToGridClasses(context.attrs, "grid")}`);
    return { className, attrs: context.attrs };
  }
};
</script>
