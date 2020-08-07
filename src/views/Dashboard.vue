<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <balance />
      <status-bar />
    </div>
    <div class="dashboard__body">
      <!-- <card class="dashboard__body--latest-transactions"> -->
      <latest-transactions />
      <!-- </card> -->
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Balance from "@/components/Dashboard/Balance";
import StatusBar from "@/components/Dashboard/StatusBar";
import LatestTransactions from "@/components/Dashboard/LatestTransactions";

export default {
  components: {
    Card,
    Balance,
    StatusBar,
    LatestTransactions
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  &__body {
    display: flex;
    justify-content: space-between;

    &--latest-transactions {
      width: 100%;
    }
  }
}
</style>
