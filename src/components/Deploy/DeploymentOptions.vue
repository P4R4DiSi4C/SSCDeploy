<template>
  <div class="deployment-options">
    <div class="deployment-options--title">Options de déploiement</div>
    <div class="deployment-options__body">
      <option-component
        v-for="(option,index) in options"
        :key="index"
        :title="option.title"
        :desc="option.desc"
        :checked="option.checked"
        :onchange="() => check(index)"
      />
    </div>
  </div>
</template>

<script>
import OptionComponent from "./OptionComponent.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    OptionComponent,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      options: "deploy/options",
    }),
  },
  methods: {
    ...mapActions({
      check: "deploy/check",
    }),
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
