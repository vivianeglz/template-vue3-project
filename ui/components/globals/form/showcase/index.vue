<template>
  <form-base @submit="onSubmit">
    <form-section v-slot="{ submit, onValidation }">
      <flex-container>
        <flex-item s12 m6 class="margin--bottom--s">
          <input-text
            v-model="firstname"
            name="firstname"
            label="Firstname"
            placeholder="Ex: Viviane"
            :submit="submit"
            required
            @validation="onValidation"
          />
        </flex-item>
        <flex-item s12 m6 class="margin--bottom--s">
          <input-text v-model="lastname" name="lastname" label="Lastname" placeholder="Ex: Gonzalez" :submit="submit" @validation="onValidation" />
        </flex-item>
      </flex-container>
    </form-section>
  </form-base>
  <template v-if="currentData">
    <p>Données du formulaire :</p>
    <pre>{{ currentData }}</pre>
  </template>
</template>

<script>
import { ref } from "vue";
import { FormBase, FormSection } from "@components/globals/form";
import { FlexContainer, FlexItem } from "@components/globals/grid";
import { InputText } from "@components/globals/inputs";

export default {
  name: "FormShowcase",
  components: {
    InputText,
    FormBase,
    FormSection,
    FlexContainer,
    FlexItem
  },
  setup() {
    const firstname = ref(null);
    const lastname = ref(null);
    const currentData = ref(null);

    function onSubmit(response) {
      const { valid, data } = response;
      currentData.value = data;
    }

    return { firstname, lastname, currentData, onSubmit };
  }
};
</script>
