<template>
  <div class="modal" data-testid="modal">
    <div class="modal__container" data-testid="modal-container" :class="className">
      <div class="modal__header">
        <h3 v-if="title">{{ title }}</h3>
        <button class="modal__btn-close" @click.prevent="$emit('close')">
          <icon-close />
        </button>
      </div>
      <slot />
      <div v-if="thereIsFooter" class="modal__footer" data-testid="modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import { toRef, computed } from "vue";
import { IconClose } from "@components/globals/icons";

export default {
  name: "Modal",
  components: {
    IconClose
  },
  props: {
    title: {
      type: String,
      default: "Title"
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return ["s", "m", "l"].includes(value);
      }
    }
  },
  setup(props, context) {
    const size = toRef(props, "size");
    const thereIsFooter = computed(() => (context.slots.footer ? true : false));
    const className = computed(() => `modal__container--${size.value}`);
    return { className, thereIsFooter };
  }
};
</script>
