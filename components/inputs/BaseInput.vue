<template>
  <div class="form-block">
    <label v-if="label">{{ label }}</label>
    <input type="text"
           class="form-input"
           @input="$emit('update:modelValue', $event.target.value)"
           :class="[size, status]"
           :value="modelValue"
           :placeholder="placeholder">

    <div v-if="!!errorMessage"
         class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Enter text',
    required: false
  },
  label: {
    type: String,
    required: false
  },
  size: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: false
  },
  errorMessage: {
    type: String,
    required: false
  }
});

const emits = defineEmits(['update:modelValue']);
</script>

<style scoped lang="scss" src="./styles.scss"></style>