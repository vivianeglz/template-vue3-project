<template>
  <flex-container>
    <flex-item s6 m4 l2 class="margin--bot--s">
      <div class="display-center">
        <icon-close :color="color" />
      </div>
      <p class="margin--bottom--null margin--top--xs text-align--center">IconClose</p>
    </flex-item>
  </flex-container>
</template>

<script>
import { FlexContainer, FlexItem } from "@components/globals/grid";
import { IconClose } from "@components/globals/icons";

export default {
  name: "IconsShowcase",
  components: {
    FlexContainer,
    FlexItem,
    IconClose
  },
  props: {
    color: {
      type: String
    }
  }
};
</script>
