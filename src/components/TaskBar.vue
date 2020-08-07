<template>
  <div class="taskbar">
    <div class="taskbar__drag"></div>
    <div class="taskbar__buttons">
      <div class="taskbar__buttons--button close" @click="close">
        <div class="cross"></div>
      </div>
      <div class="taskbar__buttons--button maximize"></div>
      <div class="taskbar__buttons--button minimize"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      window.api.electronIpcInvoke("close-me");
    }
  }
};
</script>

<style lang="scss" scoped>
.taskbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $taskbar-color;
  padding: 15px 0;

  &__drag {
    -webkit-app-region: drag;
    position: absolute;
    top: 0;
    left: 70px;
    bottom: 0;
    right: 0;
  }

  &__buttons {
    margin-left: 15px;
    display: flex;

    &--button {
      margin-right: 8px;
      width: 14px;
      height: 14px;
      border-radius: 50%;

      &.close {
        position: relative;
        background-color: $negative-color;

        &:hover .cross {
          height: 100%;
          width: 100%;

          &::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 11px;
            height: 3px;
            background-color: rgba(50, 50, 50, 0.5);
          }

          &::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
            width: 11px;
            height: 3px;
            background-color: rgba(50, 50, 50, 0.5);
          }
        }
      }

      &.maximize {
        background-color: $medium-color;
      }

      &.minimize {
        background-color: $positive-color;
      }
    }
  }
}
</style>
