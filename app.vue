<template>
  <SvgSprite />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import SvgSprite from "~/components/svgComponents/SvgSprite.vue";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.3;
  filter: grayscale(1);
}
</style>