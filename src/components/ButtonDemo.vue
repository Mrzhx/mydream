<template>
  <div>Button 示例</div>
  <h3>示例一</h3>
  <div>
    <Button>
      <span>你好</span>
    </Button>
    <Button theme="link">
      <span>你好</span>
    </Button>
    <Button theme="text">
      <span>你好</span>
    </Button>
    <Button theme="button">
      <span>你好</span>
    </Button>
  </div>
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