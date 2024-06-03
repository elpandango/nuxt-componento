<template>
  <button class="button"
          :class="[size, status]">Button</button>
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  }
});
</script>
  
<style
    scope
    src="./styles.scss"
    lang="scss">

</style>
