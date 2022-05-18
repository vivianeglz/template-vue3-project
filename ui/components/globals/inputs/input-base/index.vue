<script>
import { computed, ref, toRef, watch } from "vue";
import isEmpty from "@common/helpers/isEmpty";
import randomKey from "@common/helpers/randomKey";
import validator from "@common/services/validator";

export default {
  name: "InputBase",
  props: {
    modelValue: {
      required: true
    },
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: "Il y a une erreur dans ce champ"
    },
    emptyMessage: {
      type: String,
      default: "Veuillez remplir ce champ"
    },
    schema: {
      type: Object,
      default: () => ({})
    },
    name: {
      type: String,
      required: true
    },
    disableValidation: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    formatter: {
      type: Function
    },
    additiveValidator: {
      type: Function
    },
    submit: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "validation"],
  setup(props, { attrs, emit }) {
    const submit = toRef(props, "submit");
    const id = randomKey();
    const valid = ref(true);
    const labelText = computed(() => (!props.required || props.disableValidation ? props.label : `${props.label} *`));
    const className = computed(() => (valid.value ? null : "input-container--error"));
    const errorText = computed(() => {
      if (valid.value) {
        return null;
      }
      if (props.required && isEmpty(props.modelValue)) {
        return props.emptyMessage;
      }
      return props.errorMessage;
    });

    function emitResult(value) {
      emit("update:modelValue", value);
      if (!props.disableValidation) {
        const data = {};
        data[props.name] = value;
        emit("validation", { valid: valid.value, id, data });
      }
    }

    function validation(value) {
      if (props.required && isEmpty(value)) {
        valid.value = false;
        emitResult(value);
        return;
      }
      if (!validator.validate(props.schema, value)) {
        valid.value = false;
        emitResult(value);
        return;
      }
      if (props.additiveValidator) {
        valid.value = props.additiveValidator(value);
        emitResult(value);
        return;
      }
      valid.value = true;
      emitResult(value);
    }

    function onChange(value) {
      if (props.formatter) {
        value = props.formatter(value);
      }
      if (props.disableValidation) {
        emitResult(value);
        return;
      }
      if (!props.required && isEmpty(value)) {
        valid.value = true;
        emitResult(value);
        return;
      }
      validation(value);
    }

    watch(submit, () => {
      onChange(props.modelValue);
    });

    return {
      id,
      valid,
      labelText,
      errorText,
      className,
      attrs,
      onChange
    };
  }
};
</script>
