<template>
  <div class="option">
    <div class="option--details">
      <span>{{title}}</span>
      <span class="desc">{{desc}}</span>
    </div>
    <div class="option--switch">
      <label class="checkbox">
        <input
          type="checkbox"
          :checked="checked"
          @change="$emit('update:checked', $event.target.checked)"
        />
        <div>
          <span></span>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionComponent",
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    checked: { type: Boolean, required: true },
  },
};
</script>

<style lang="scss" scoped>
.option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  box-shadow: 0px 0 7px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  &--details {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 45%;
    padding: 17px;

    .desc {
      font-size: 11px;
      font-weight: lighter;
    }
  }

  &--switch {
    padding: 17px;
    .checkbox {
      --line: #e8ebfb;
      --dot: #ff0000;
      --circle: #d3d4ec;
      --background: #fff;
      --duration: 0.3s;
      --text: #9ea0be;
      --shadow: 0 1px 3px #{rgba(#00093d, 0.08)};
      cursor: pointer;
      position: relative;
      &:before {
        content: "";
        width: 60px;
        height: 32px;
        border-radius: 16px;
        background: var(--background);
        position: absolute;
        left: 0;
        top: 0;
        box-shadow: var(--shadow);
      }
      input {
        display: none;
        & + div {
          position: relative;
          &:before,
          &:after {
            --s: 1;
            content: "";
            position: absolute;
            height: 4px;
            top: 14px;
            width: 24px;
            background: var(--line);
            transform: scaleX(var(--s));
            transition: transform var(--duration) ease;
          }
          &:before {
            --s: 0;
            left: 4px;
            transform-origin: 0 50%;
            border-radius: 2px 0 0 2px;
          }
          &:after {
            left: 32px;
            transform-origin: 100% 50%;
            border-radius: 0 2px 2px 0;
          }
          span {
            padding-left: 60px;
            line-height: 28px;
            color: var(--text);
            &:before {
              --x: 0;
              --b: var(--circle);
              --s: 4px;
              content: "";
              position: absolute;
              left: 4px;
              top: 4px;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              box-shadow: inset 0 0 0 var(--s) var(--b);
              transform: translateX(var(--x));
              transition: box-shadow var(--duration) ease,
                transform var(--duration) ease;
            }
            &:not(:empty) {
              padding-left: 68px;
            }
          }
        }
        &:checked {
          & + div {
            &:before {
              --s: 1;
            }
            &:after {
              --s: 0;
            }
            span {
              &:before {
                --x: 28px;
                --s: 12px;
                --b: var(--dot);
              }
            }
          }
        }
      }
    }
  }
}
</style>