### 开始

一、在 <code>main.ts</code> 或 <code>main.js</code> 中 引入 **CSS** 样式 (路径**复制**过去！！)

`import "dream-ui-ziye/dist/lib/dream.esm.css";`

二、在 **.vue** 文件中使用

```javascript
<template>
  <div class="main-center">
    <div>
      <h2>按钮组件</h2>
      <Abutton>你好</Abutton>
    </div>
    <div>
      <h2>开关组件</h2>
      <Switch v-model:value="status" />
    </div>
    <div>
      <h2>tabs 切换组件</h2>
      <Tabs v-model:selected="initTab">
        <Tab title="Tab1">内容一</Tab>
        <Tab title="Tab2">内容二</Tab>
      </Tabs>
    </div>
    <div>
      <h2>弹出框</h2>
      <Abutton @click="open">点击弹出框</Abutton>
    </div>
  </div>
</template>

<script>
import { Button, Tabs, Tab, Switch, openDialog } from "dream-ui-ziye";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Abutton: Button,
    Tabs,
    Tab,
    Switch,
  },
  setup() {
    const status = ref(false);
    const initTab = ref("Tab1");

    const open = () => {
      openDialog({
        title: "我是弹出框",
        content: "这是我的内容",
        ok: () => {
          console.log("点击了确认");
        },
        cancel: () => {
          console.log("点击了取消");
        },
      });
    };
    return { status, initTab, open };
  },
};
</script>
<style scoped>
.main-center {
  width: 500px;
  height: 900px;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  flex-direction: column;
}
</style>

```

