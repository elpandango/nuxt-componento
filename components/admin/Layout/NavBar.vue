<template>
  <nav
   class="navbar"
   role="navigation"
   aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          Admin Panel
        </div>

        <a
         @click.prevent="showMobileNav = !showMobileNav"
         role="button"
         class="navbar-burger"
         :class="{'is-active': showMobileNav}"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample"
         ref="navbarBurgerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div v-if="authorized"
           id="navbarBasicExample"
           class="navbar-menu"
           :class="{'is-active': showMobileNav}"
           ref="navbarMenuRef">
        <div class="navbar-start"
             style="align-items: center;">
          <button
           @click="onLogout"
           class="button is-small is-info"
           style="height: 32px;">
            Log out
          </button>
        </div>
        <div class="navbar-end">
          <RouterLink
           @click="showMobileNav = false"
           class="navbar-item"
           active-class="is-active"
           to="/admin/all-components">
            All Components
          </RouterLink>
          <RouterLink
           @click="showMobileNav = false"
           class="navbar-item"
           active-class="is-active"
           to="/admin/add-component">
            Add New Component
          </RouterLink>
          <RouterLink
           @click="showMobileNav = false"
           class="navbar-item"
           active-class="is-active"
           to="/">
            Go to Main Site
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref} from "vue";
import {onClickOutside} from '@vueuse/core';

const props = defineProps({
  authorized: {
    type: Boolean,
    default: true
  }
});

let showMobileNav = ref(false);

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);
const router = useRouter();

onClickOutside(navbarMenuRef, event => {
  showMobileNav.value = false;
}, {
  ignore: [navbarBurgerRef]
});

const onLogout = () => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('token');
  router.push('/admin/auth');
};
</script>

<style lang="scss">
.navbar {
  .navbar-item {
    &.is-active {
      background-color: #fff;
      color: #000000;
    }

    &.is-active:hover {
      background-color: #fafafa;
    }
  }
}

@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
