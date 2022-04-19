<script>
import { toRef, computed } from "vue";

export default {
  name: "ButtonBase",
  props: {
    tag: {
      type: String,
      default: "button",
      validator: value => {
        return ["button", "a", "nuxt-link"].includes(value);
      }
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return ["s", "m"].includes(value);
      }
    }
  },
  setup(props, context) {
    const size = toRef(props, "size");
    const className = computed(() => `button--${size.value}`);
    return { className, attrs: context.attrs };
  }
};
</script>
