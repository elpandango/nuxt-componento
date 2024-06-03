<template>
  <div>
    <h1>API Response:</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state to store API response
const message = ref('')

// Fetch data using useFetch, which works both on server-side and client-side
const { data, error } = await useFetch('/api/hello')

if (data.value) {
  message.value = data.value.message
}

if (error.value) {
  console.error('Error fetching data:', error.value)
}
</script>
