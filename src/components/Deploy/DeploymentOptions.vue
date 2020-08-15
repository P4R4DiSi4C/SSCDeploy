<template>
  <div class="deployment-options">
    <div class="deployment-options--title">Options de déploiement</div>
    <div class="deployment-options__body">
      <option-component
        v-for="option in options"
        :key="option.id"
        :title="option.title"
        :desc="option.desc"
        :checked.sync="option.checked"
      />
    </div>
  </div>
</template>

<script>
import OptionComponent from "./OptionComponent.vue";
import options from "./Options.js";

export default {
  components: {
    OptionComponent,
  },
  data() {
    return {
      options,
    };
  },
};
</script>

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
  }
}
</style>
