<script>
import { toRef, computed } from "vue";

export default {
  name: "IconBase",
  props: {
    color: {
      type: String,
      default: "dark",
      validator: value => {
        return ["dark", "light", "colored"].includes(value);
      }
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },
  setup(props) {
    const color = toRef(props, "color");
    const className = computed(() => `icon--${color.value}`);
    return { className };
  }
};
</script>
