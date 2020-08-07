<template>
  <div class="statusbar">
    <div class="statusbar__block">
      <i class="statusbar__block--icon ion-ios-cloud"></i>
      <div class="statusbar__block--title">32.5% synced</div>
    </div>
    <div class="statusbar__block">
      <i class="statusbar__block--icon ion-ios-wifi"></i>
      <div class="statusbar__block--title">12 connections</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statusbar {
  display: flex;

  &__block {
    cursor: pointer;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    &--icon {
      text-align: center;
      font-size: 31px;
    }

    &--title {
      font-size: 12px;
    }
  }
}
</style>
