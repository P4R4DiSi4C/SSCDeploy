<template>
  <div class="deployment">
    <div class="deployment__header">HEADER</div>
    <div class="deployment__body">
      <deployment-options />
    </div>
    <div class="deployment__footer">
      
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
  display: grid;
  grid-template-areas:
    "header"
    "body"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;

  height: 100%;

  &__header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  &__body {
    grid-area: body;
    display: flex;
    justify-content: space-between;

    &--deployment-options {
      width: 100%;
    }
  }

  &__footer {
    grid-area: footer;
  }
}
</style>
