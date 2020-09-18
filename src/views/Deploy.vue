<template>
  <div class="deployment">
    <div class="deployment__header">
      <div class="deployment__stats">
        <div class="deployment__stats__block">
          <div class="deployment__stats__block--title">Nb. déploiements</div>
          <div class="deployment__stats__block--value">25</div>
        </div>
        <div class="deployment__stats__block">
          <div class="deployment__stats__block--title">Nb. remplacements</div>
          <div class="deployment__stats__block--value">5</div>
        </div>
      </div>
    </div>
    <div class="deployment__body">
      <deployment-options />
    </div>
    <div class="deployment__footer">
      <button class="deployment__epflbutton">DÉPLOYER</button>
    </div>
  </div>
</template>

<script>
import DeploymentOptions from "@/components/Deploy/DeploymentOptions";

export default {
  components: {
    DeploymentOptions,
  },
};
</script>

<style lang="scss" scoped>
.deployment {
  ::-webkit-scrollbar {
    display: none;
  }
  display: grid;
  grid-template-areas:
    "header"
    "body"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: 55px 1fr 55px;
  grid-gap: 15px;

  &__header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 25px;
  }

  &__body {
    grid-area: body;
    display: flex;
    justify-content: space-between;
    overflow: scroll;
  }

  &__footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
  }

  &__epflbutton {
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    color: #fff;
    background-color: red;
    border-color: red;
    border: 1px solid transparent;
    padding: 0.68rem 1.4rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 2px;
    text-transform: uppercase;

    &:hover {
      background: #b51f1f;
      border-color: #b51f1f;
    }
  }

  &__stats {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;

    &__block {
      &--title {
        font-size: 12px;
        margin-bottom: 5px;
      }

      &--value {
        font-size: 29px;
        font-weight: bold;
      }
    }
  }
}
</style>
