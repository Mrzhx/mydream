<template>
  <div class="layout">
    <TopHeader toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>开发指南</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>基础组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 切换</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopHeader from "../components/TopHeader.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    TopHeader,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 90px;
    padding-left: 180px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: #fff;
  width: 170px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 6.2em 0 0.6em 2.6em;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 8px 0 8px 15px;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    text-align: left;
  }

  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        color: #455a64;
        font-size: 14px;
        line-height: 28px;
      }

      .router-link-active {
        font-weight: bold;
        color: #42b983;
      }
    }
  }
}

main {
  overflow: auto;
}
@media (max-width: 500px) {
  aside {
    padding: 2em 1em;
    border-right: 1px solid #f3f3f3;
  }
}
</style>
