<template>
  <div class="demo-box">
    <div class="columns">
      <div class="col w50p">
        <div class="col-content no-overflow">
          <slot name="demo-slot"></slot>
        </div>
      </div>
      <div class="col w50p">
        <div class="col-title code-title">
          HTML
        </div>
        <div class="col-content">
          <slot name="code-slot"></slot>
          <div class="copy-btn-block">
            <CopyButton :parent-class="'demo-box'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CopyButton from "@/components/copyBtn/CopyButton.vue";
</script>

<style
    lang="scss" src="./styles.scss">
</style>
