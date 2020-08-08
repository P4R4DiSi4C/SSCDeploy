<template>
  <div class="sidebar">
    <div class="sidebar__menu">
      <router-link class="sidebar__menu--link" to="/">Dashboard</router-link>
      <router-link class="sidebar__menu--link" to="/deploy">Déploiement</router-link>
      <router-link class="sidebar__menu--link" to="/transfer">Transfer</router-link>
      <router-link class="sidebar__menu--link" to="/account">Account</router-link>
      <router-link class="sidebar__menu--link" to="/explorer">Explorer</router-link>
      <router-link class="sidebar__menu--link" to="/peers">Peers</router-link>
      <router-link class="sidebar__menu--link" to="/settings">Settings</router-link>
      <router-link class="sidebar__menu--link" to="/diagnostics">Diagnostics</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 215px;
  box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.05);

  &__menu {
    margin-top: 70px;

    &--link {
      position: relative;
      display: block;
      padding: 13px 40px;
      color: rgba(111, 122, 132, 0.8);
      font-size: 12px;
      text-transform: uppercase;
      text-decoration: none;

      &.router-link-exact-active::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: $active-color;
        box-shadow: 0px 0px 20px 2px $active-color-transparent;
        overflow: hidden;
      }
    }
  }
}
</style>
