<template>
  <div class="balance">
    <div class="balance__block">
      <div class="balance__block--title">Balance</div>
      <div class="balance__block--balance">
        50.000
        <span class="balance__block--balance--currency">NΛSH</span>
      </div>
    </div>
    <div class="balance__block">
      <div class="balance__block--title">Unconfirmed</div>
      <div class="balance__block--balance">
        10
        <span class="balance__block--balance--currency">NΛSH</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balance {
  display: flex;

  &__block {
    margin-right: 30px;

    &--title {
      font-size: 12px;
      margin-bottom: 5px;
    }

    &--balance {
      font-size: 29px;
      font-weight: bold;

      &--currency {
        font-size: 14px;
        font-weight: lighter;
      }
    }
  }
}
</style>
