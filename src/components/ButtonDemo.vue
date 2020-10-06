<template>
  <div>Button 示例</div>
  <h3>示例一</h3>
  <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">
    <span>你好</span>
  </Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  name: "ButtonDemo",
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("say ping");
    };
    return { onClick };
  },
};
</script>

<style scoped>
</style>