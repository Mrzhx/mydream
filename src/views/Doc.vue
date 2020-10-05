<template>
  <div class="layout">
    <TopHeader class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol class="menu-con">
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopHeader from '../components/TopHeader.vue';
import { inject, Ref } from 'vue';
export default {
  components: {
    TopHeader
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    console.log(menuVisible?.value )
    return {
      menuVisible
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
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
    background: lightgreen;
    overflow: auto;
  }
}
aside {
  background: lightblue;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    padding-left: 18px;
    margin-bottom: 4px;
  }
  > ol {
    > li {
      text-align: left;
      padding: 4px 20px;
    }
  }
}
</style>
