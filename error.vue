<template>
  <NuxtLayout>
    <section>

    {{ props }}
    </section>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({error: Object});
</script>