<template>
  <div class="deployment">
    <div class="deployment__header">HEADER</div>
    <div class="deployment__body">
      <deployment-options />
    </div>
  </div>
</template>

<script>
import DeploymentOptions from "@/components/Deploy/DeploymentOptions";

export default {
  components: {
    DeploymentOptions
  }
};
</script>

<style lang="scss" scoped>
.deployment {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  &__body {
    display: flex;
    justify-content: space-between;

    &--deployment-options {
      width: 100%;
    }
  }
}
</style>
