<template>
  <div id="app">
    <task-bar />

    <side-bar id="app__sidebar" />
    <router-view id="app__content" />
  </div>
</template>

<script>
import TaskBar from "@/components/TaskBar";
import SideBar from "@/components/SideBar";

export default {
  components: {
    TaskBar,
    SideBar,
  },
  async mounted() {
    await console.log("VUE -> PRELOAD: PING");
    const ping = await window.api.Ping();
    console.log("IPCMain -> VUE: " + ping);

    await window.api.USBHandler();
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 13px;
  color: $font-color;
  user-select: none;
  overflow: hidden;

  #app {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas: "sidebar main";
    grid-template-columns: minmax(145px, 215px) auto;
    grid-template-rows: 1fr;

    &__sidebar {
      grid-area: sidebar;
    }

    &__content {
      grid-area: main;
      overflow: hidden;
      padding: 25px;
    }
  }
}
</style>
