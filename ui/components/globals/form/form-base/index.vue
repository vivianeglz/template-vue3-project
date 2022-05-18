<template>
  <form class="form-base">
    <slot v-if="!valid" name="errorMessage">
      <p>Le formulaire n'est pas valide. Veuillez remplir l'ensemble des champs obligatoires.</p>
    </slot>
    <slot />
    <div class="form-base__buttons">
      <slot name="buttons" :disableSubmit="disableSubmit || currentDisabledSubmit">
        <button-secondary @click.prevent="$emit('return')" class="margin--right--xs" v-if="!hideReturnButton">
          {{ textButtonReturn }}
        </button-secondary>
        <button-primary @click.prevent="onSubmit" :disabled="disableSubmit || currentDisabledSubmit">
          {{ textButtonSubmit }}
        </button-primary>
      </slot>
    </div>
  </form>
</template>

<script>
import { ref, nextTick, provide } from "vue";
import { ButtonPrimary, ButtonSecondary } from "@components/globals/buttons";

export default {
  name: "FormBase",
  components: {
    ButtonPrimary,
    ButtonSecondary
  },
  props: {
    textButtonSubmit: {
      type: String,
      default: "Submit"
    },
    textButtonReturn: {
      type: String,
      default: "Return"
    },
    disableSubmit: {
      type: Boolean,
      default: false
    },
    hideReturnButton: {
      type: Boolean,
      default: false
    }
  },
  $emits: ["submit", "return"],
  setup(props, { emit }) {
    const inputsValidityState = ref({});
    const submit = ref(false);
    const data = ref({});
    const valid = ref(true);
    const currentDisabledSubmit = ref(false);

    function isValid() {
      const values = Object.values(inputsValidityState.value);
      if (values.length === 0) return false;
      return !values.includes(false);
    }

    function emitResult() {
      valid.value = isValid();
      const response = {
        valid,
        data: data.value
      };
      emit("submit", response);
    }

    function onSubmit(event) {
      if (event && event.target) {
        event.target.focus();
      }
      if (props.disableSubmit) {
        return;
      }
      currentDisabledSubmit.value = true;
      inputsValidityState.value = [];
      submit.value = !submit.value;
      nextTick(() => {
        currentDisabledSubmit.value = false;
        emitResult();
      });
    }

    function onValidation(response) {
      inputsValidityState.value[response.id] = response.valid;
      Object.assign(data.value, response.data);
    }

    provide("submit", submit);
    provide("onValidation", onValidation);

    return { currentDisabledSubmit, valid, onSubmit };
  }
};
</script>
