<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import { ref } from "vue";
export default {
  name: "TabDemo",
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航2");
    return {
      x,
    };
  },
};
</script>
