<template>
  <table class="table">
    <thead>
    <slot name="table-header"></slot>
    </thead>
    <tbody>
    <slot name="table-body"></slot>
    </tbody>
  </table>
</template>

<script setup>

</script>

<style lang="scss">
.table {
  border-collapse: collapse;
  border-spacing: 0;

  width: 100%;

  tbody {
    td {
      border: 1px solid var(--neutral-700);
      padding: 6px 12px;
      text-align: left;
    }
  }

  thead {
    th {
      border: 1px solid var(--neutral-700);
      padding: 6px 12px;
      text-align: left;
    }
  }
}
</style>