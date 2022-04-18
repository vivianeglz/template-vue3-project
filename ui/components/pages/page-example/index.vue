<template>
  <div data-testid="page-example">
    <header-primary title="Example" description="Page's description" />
    <flex-container class="margin--top--l">
      <flex-item xs12 s6>
        <p>Bloc 1</p>
      </flex-item>
      <flex-item xs12 s6>
        <p>Bloc 2</p>
      </flex-item>
    </flex-container>
  </div>
</template>

<script>
import HeaderPrimary from "@components/segments/headers/header-primary/index.vue";
import { FlexContainer, FlexItem } from "@components/globals/grid/index.js";

export default {
  name: "PageExemple",
  components: {
    HeaderPrimary,
    FlexContainer,
    FlexItem
  }
};
</script>
