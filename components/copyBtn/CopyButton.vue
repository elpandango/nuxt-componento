<template>
  <div class="copy-btn-block">
    <button type="button"
            class="copy-btn"
            @click="onClicked">Copy</button>
  </div>
</template>

<script setup>
const props = defineProps({
  parentClass: {
    type: String
  }
})
const onClicked = (evt) => {
  const copyButton = evt.target;
  const demoParent = evt.target.closest('.' + props.parentClass);
  const preBlock = demoParent.querySelector('pre');

  const range = document.createRange();
  range.selectNode(preBlock);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  document.execCommand('copy');
  copyButton.classList.add('active');

  setTimeout(() => {
    window.getSelection().removeAllRanges();
    copyButton.classList.remove('active');
  }, 2000);
};
</script>

<style scoped lang="scss" src="./styles.scss"></style>