<template>
  <div class="bgc-light full-height">
    <NavBar/>
    <div class="container is-max-desktop px-2 py-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/admin/Layout/NavBar.vue";
import repositoryFactory from "~/repositories/repositoryFactory";

const router = useRouter();

onMounted(async() => {
  try {
    const userEmail = localStorage.getItem('userEmail');
    await repositoryFactory.get('User').getUser(userEmail);
  } catch (err) {
    router.push('/admin/auth')
  }
});
</script>

<style>
@import "bulma/css/bulma.css";

.bgc-light {
  background-color: #effaf5 !important;
}

.full-height {
  min-height: 100vh;
}
</style>