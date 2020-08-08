<template>
  <div class="latest-transactions">
    <div class="latest-transactions--title">Options de déploiement</div>
    <div class="latest-transactions__body">
      <div class="latest-transactions__body__row">
        <div class="latest-transactions__body__row--switch pad">
          <label class="switch">
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>
        <div class="latest-transactions__body__row--block pad">157.162</div>
        <div class="latest-transactions__body__row--amount pad">
          <span class="positive">9.000</span>
          <span class="currency">NΛSH</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.latest-transactions {
  position: relative;
  width: 100%;
  height: 100%;

  .pad {
    padding: 17px;
  }

  .positive {
    color: $positive-color;
  }

  .negative {
    color: $negative-color;
  }

  &--title {
    background-color: rgba(229, 234, 237, 0.05);
    font-size: 16px;
    font-weight: bold;
    padding: 17px 0;
  }

  &__body {
    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      box-shadow: 0px 0 7px 0px rgba(0, 0, 0, 0.05);
      border-radius: 5px;

      &--switch {
        .switch {
          --line: #e8ebfb;
          --dot: #28cd41;
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

      &--block {
        font-size: 24px;
        // font-weight: bold;
      }

      &--amount {
        font-size: 25px;
        font-weight: bold;

        .currency {
          margin-left: 5px;
          font-size: 11px;
          font-weight: lighter;
        }
      }

      &--date {
        display: flex;
        flex-direction: column;
        align-items: center;

        .day {
          font-size: 23px;
          font-weight: bold;
        }

        .month {
          // font-weight: bold;
        }
      }
    }
  }
}
</style>
