<template>
  <div id="app">
    <div id="app__body">
      <div id="app__body__content">
        <h1>DASHBOARD</h1>
      </div>
    </div>
  </div>
</template>


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
