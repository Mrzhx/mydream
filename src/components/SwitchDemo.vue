<template>
  <div>
    <Switch v-model:value="bool"></Switch>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  name: "SwitchDemo",
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return { bool };
  },
};
</script>

<style lang="scss" scoped>
</style>