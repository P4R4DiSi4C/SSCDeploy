<template>
  <div class="latest-transactions">
    <!-- <div class="latest-transactions--notif">2</div> -->
    <div class="latest-transactions--title">Latest transactions</div>
    <div class="latest-transactions__body">
      <div class="latest-transactions__body__row">
        <div class="latest-transactions__body__row--icon pad">
          <md-arrow-round-up-icon w="32" h="32" class="positive" />
        </div>
        <div class="latest-transactions__body__row--block pad">157.162</div>
        <div class="latest-transactions__body__row--amount pad">
          <span class="positive">9.000</span>
          <span class="currency">NΛSH</span>
        </div>
        <div class="latest-transactions__body__row--date pad">
          <span class="month">APR</span>
          <span class="day">15</span>
        </div>
      </div>
      <div class="latest-transactions__body__row">
        <div class="latest-transactions__body__row--icon pad">
          <md-arrow-round-down-icon w="32" h="32" class="negative" />
        </div>
        <div class="latest-transactions__body__row--block pad">150.354</div>
        <div class="latest-transactions__body__row--amount pad">
          <span class="negative">3.000</span>
          <span class="currency">NΛSH</span>
        </div>
        <div class="latest-transactions__body__row--date pad">
          <span class="month">APR</span>
          <span class="day">14</span>
        </div>
      </div>
      <div class="latest-transactions__body__row">
        <div class="latest-transactions__body__row--icon pad">
          <md-arrow-round-up-icon w="32" h="32" class="positive" />
        </div>
        <div class="latest-transactions__body__row--block pad">145.950</div>
        <div class="latest-transactions__body__row--amount pad">
          <span class="positive">5.000</span>
          <span class="currency">NΛSH</span>
        </div>
        <div class="latest-transactions__body__row--date pad">
          <span class="month">APR</span>
          <span class="day">13</span>
        </div>
      </div>
      <div class="latest-transactions__body__row">
        <div class="latest-transactions__body__row--icon pad">
          <md-arrow-round-down-icon w="32" h="32" class="negative" />
        </div>
        <div class="latest-transactions__body__row--block pad">144.163</div>
        <div class="latest-transactions__body__row--amount pad">
          <span class="negative">1.000</span>
          <span class="currency">NΛSH</span>
        </div>
        <div class="latest-transactions__body__row--date pad">
          <span class="month">APR</span>
          <span class="day">12</span>
        </div>
      </div>
      <div class="latest-transactions__body__row">
        <div class="latest-transactions__body__row--icon pad">
          <md-arrow-round-up-icon w="32" h="32" class="positive" />
        </div>
        <div class="latest-transactions__body__row--block pad">142.015</div>
        <div class="latest-transactions__body__row--amount pad">
          <span class="positive">2.000</span>
          <span class="currency">NΛSH</span>
        </div>
        <div class="latest-transactions__body__row--date pad">
          <span class="month">APR</span>
          <span class="day">11</span>
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

  &--notif {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(50%, -50%);
    background-color: $active-color;
    // background: $main-gradient;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }

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

      &--icon {
        .icon {
          font-size: 29px;
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
