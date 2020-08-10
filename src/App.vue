<template>
  <div id="app">
    <task-bar />
    <div id="app__body">
      <side-bar />
      <div id="app__body__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TaskBar from "@/components/TaskBar";
import SideBar from "@/components/SideBar";

export default {
  components: {
    TaskBar,
    SideBar
  },
  async mounted() {
    await console.log("VUE -> PRELOAD: PING");
    const ping = await window.api.Ping();
    console.log("IPCMain -> VUE: " + ping);

    await window.api.USBHandler();
  }
};
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 13px;
  color: $font-color;
  user-select: none;

  #app {
    height: 100%;

    &__body {
      height: 100%;
      display: flex;

      &__content {
        flex: 1;
        padding: 25px;
      }
    }
  }
}
</style>
