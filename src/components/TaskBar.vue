<template>
  <div class="taskbar">
    <div class="taskbar__drag"></div>
    <div class="taskbar__buttons">
      <div class="taskbar__buttons--button close" @click="close">
        <div class="cross" />
      </div>
      <div class="taskbar__buttons--button minimize" @click="minimize">
        <div class="min" />
      </div>
      <div class="taskbar__buttons--button maximize" @click="maximize">
        <div class="max" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      window.api.CloseWindow();
    },
    minimize() {
      window.api.MinimizeWindow();
    },
    maximize() {
      window.api.MaximizeWindow();
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

    &:hover {
      .cross {
        height: 100%;
        width: 100%;

        &::before,
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 1px;
          background-color: rgba(50, 50, 50, 0.9);
        }
        &::before {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }

      .min {
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        width: 8px;
        height: 1px;
        background-color: rgba(50, 50, 50, 0.9);
        transform: translate(-50%, -50%) rotate(180deg);
      }

      .max {
        height: 100%;
        width: 100%;

        &::before,
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 8px;
          height: 1px;
          background-color: rgba(50, 50, 50, 0.9);
        }
        &::before {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        &::after {
          transform: translate(-50%, -50%);
        }
      }
    }

    &--button {
      margin-right: 8px;
      width: 14px;
      height: 14px;
      border-radius: 50%;

      &.close {
        position: relative;
        background-color: $mac-close-color;
      }

      &.minimize {
        position: relative;
        background-color: $mac-minimize-color;
      }

      &.maximize {
        position: relative;
        background-color: $mac-maximize-color;
      }
    }
  }
}
</style>
