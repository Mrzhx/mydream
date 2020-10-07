import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Switch from "./components/SwitchDemo.vue";
import Button from "./components/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tab from "./components/TabDemo.vue";
import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();

import { h } from "vue";
import Markdown from "./components/Markdown.vue";
import intro from "./markdown/intro.md";
import getStarted from "./markdown/get-started.md";
import install from "./markdown/install.md";
const md = (string) => h(Markdown, { content: string, key: string });

export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: "/doc/intro" },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: Switch },
        { path: "button", component: Button },
        { path: "dialog", component: Dialog },
        { path: "tabs", component: Tab },
      ],
    },
  ],
});
