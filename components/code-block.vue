<template>
  <div v-html="highlightedCode" class="shiki"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    default: 'javascript'
  }
});

const highlightedCode = ref('');

onMounted(async () => {
  const code = ref(`const hello = 'shiki'`)
  const highlighted = await useShikiHighlighted(code)

  // console.log(props.code);
  //
  // const highlighted = await useShikiHighlighted(props.code);
  //
  // setTimeout(() => {
  //   highlightedCode.value = highlighted.value;
  // }, 500);
});
</script>

<style scoped>
.shiki {
  background-color: #2e3440;
  padding: 1em;
  border-radius: 0.5em;
  overflow: auto;
}
</style>
