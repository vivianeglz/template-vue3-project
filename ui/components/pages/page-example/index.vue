<template>
  <div>
    <header-primary title="Example" description="Page's description" data-testid="page-example" />
  </div>
</template>

<script>
import HeaderPrimary from "@components/segments/headers/header-primary/index.vue";

export default {
  name: "PageExemple",
  components: {
    HeaderPrimary
  }
};
</script>
