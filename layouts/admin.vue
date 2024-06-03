<template>
  <NavBar/>
  <div class="container is-max-desktop px-2 py-4">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/admin/Layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.css";
</style>