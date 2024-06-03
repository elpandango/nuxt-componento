<template>
  <div class="notes">
    <div class="search-block mb-6">
      <div class="field">
        <label class="label">Component name</label>
        <div class="control">
          <input
           class="input"
           type="text"
           v-model="searchInputValue"
           placeholder="Search by component name">
        </div>
      </div>
    </div>
        <CustomComponent
            v-for="component in filteredComponents"
            :key="component.id"
            :component="component"/>

    <template v-if="isLoaded">
      {{ filteredComponents }}
    </template>
    <template v-else-if="isLoaded && !filteredComponents?.length">
      <div class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
        No components here yet...
      </div>
    </template>
    <template v-else>
      <Preloader height="calc(100vh - 400px)"/>
    </template>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import Preloader from "~/components/admin/Preloader/index.vue";
import CustomComponent from "~/components/admin/Blocks/CustomComponent.vue";

definePageMeta({
  layout: 'admin'
});

const components = ref([]);
const searchInputValue = ref('');
const isLoaded = ref(false);

isLoaded.value = false;
const {data, error} = await useFetch('/api/get-components');

components.value = data?.value?.components || [];
isLoaded.value = true;

const filteredComponents = computed(() => {
  if (components.value.length === 0) {
    return [];
  }
  if (searchInputValue.value.length === 0) {
    return components.value;
  }
  return components.value.filter(component => component?.content?.title?.toLowerCase()?.includes(searchInputValue.value.toLowerCase()));
})
</script>


<style>
@import "bulma/css/bulma.css";
</style>