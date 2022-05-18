<script>
import InputBase from "@components/globals/inputs/input-base/index.vue";

export default {
  name: "InputText",
  extends: InputBase,
  setup(props, context) {
    return { ...InputBase.setup(props, context) };
  }
};
</script>

<template>
  <div class="input-container" :className="className">
    <label v-if="label" :for="name" class="input-container__label">{{ labelText }}</label>
    <input
      v-bind="attrs"
      type="text"
      autocomplete="off"
      class="input-container__input"
      :value="modelValue"
      :name="name"
      :required="required"
      :disabled="disabled"
      @blur="onChange($event.target.value || null)"
      @keypress.enter.prevent
    />
    <transition name="error-message">
      <p v-if="!valid" class="input-container__errorText">{{ errorText }}</p>
    </transition>
  </div>
</template>
