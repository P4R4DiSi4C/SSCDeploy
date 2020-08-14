<template>
  <div class="deployment-options">
    <div class="deployment-options--title">Options de déploiement</div>
    <div class="deployment-options__body">
      <div class="deployment-options__body__row">
        <div class="deployment-options__body__row--option pad">
          <span>Suspension USB Séléctive</span>
          <span class="desc">Suspend la mise en veille USB</span>
        </div>
        <div class="deployment-options__body__row--switch pad">
          <label class="switch">
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>
      </div>
      <div class="deployment-options__body__row">
        <div class="deployment-options__body__row--option pad">
          <span>Config Firefox</span>
          <span class="desc">Configure firefox</span>
        </div>
        <div class="deployment-options__body__row--switch pad">
          <label class="switch">
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>
      </div>
      <div class="deployment-options__body__row">
        <div class="deployment-options__body__row--option pad">
          <span>Mise en veille secteur</span>
          <span class="desc">Désactive la mise en veille sous secteur</span>
        </div>
        <div class="deployment-options__body__row--switch pad">
          <label class="switch">
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>
      </div>
      <div class="deployment-options__body__row">
        <div class="deployment-options__body__row--option pad">
          <span>Mise en veille NIC</span>
          <span class="desc">Désactive la mise en veille cartes réseau</span>
        </div>
        <div class="deployment-options__body__row--switch pad">
          <label class="switch">
            <input type="checkbox" />
            <div>
              <span></span>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.deployment-options {
  position: relative;
  width: 100%;
  height: 100%;

  .pad {
    padding: 17px;
  }

  &--title {
    background-color: rgba(229, 234, 237, 0.05);
    font-size: 16px;
    font-weight: bold;
    padding: 17px 0;
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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

      &--option {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        width: 45%;

        .desc {
          font-size: 11px;
          font-weight: lighter;
        }
      }
    }
  }
}
</style>
