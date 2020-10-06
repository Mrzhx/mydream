<template>
  <div>Button 示例</div>
  <h2>示例一</h2>
  <div>
    <Button> 你好 </Button>
    <Button theme="link"> 你好 </Button>
    <Button theme="text"> 你好 </Button>
  </div>
  <h2>示例二</h2>
  <div>
    <Button theme="link"> 普通按钮 </Button>
    <Button theme="link" size="small"> 小按钮 </Button>
    <Button theme="link" size="big"> 大号按钮 </Button>
  </div>
  <div>
    <Button theme="text"> 普通按钮 </Button>
    <Button theme="text" size="small"> 小按钮 </Button>
    <Button theme="text" size="big"> 大号按钮 </Button>
  </div>
  <div>
    <Button> 普通按钮 </Button>
    <Button size="small"> 小按钮 </Button>
    <Button size="big"> 大号按钮 </Button>
  </div>
  <h2>示例三</h2>
  <div>
    <Button> 你好 </Button>
    <Button level="main"> 你好 </Button>
    <Button level="danger"> 危险文字 </Button>
  </div>
  <div>
    <Button theme="text"> 你好 </Button>
    <Button theme="text" level="main"> 你好 </Button>
    <Button theme="text" level="danger"> 危险文字 </Button>
  </div>
  <div>
    <Button theme="link"> 你好 </Button>
    <Button theme="link" level="main"> 你好 </Button>
    <Button theme="link" level="danger"> 你好 </Button>
  </div>
  <h2>示例四</h2>
  <div>
    <Button :loading="true"> 你好 </Button>
    <Button theme="text" :loading="true"> 你好 </Button>
    <Button theme="link" :loading="true"> 你好 </Button>
  </div>
  <h2>示例四</h2>
  <div>
    <Button disabled> 禁用按钮 </Button>
    <Button theme="link" disabled> 禁用按钮 </Button>
    <Button theme="text" disabled> 禁用按钮 </Button>
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