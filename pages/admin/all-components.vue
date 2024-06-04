<template>
  <div class="notes">
    <template v-if="isLoaded">
      <div class="filter-field mb-6">
        <p class="mb-1">Filter by component <b>TYPE</b></p>
        <div class="select">
          <select v-model="selectedOption"
                  @change="editorChangeHandler('type', $event.target.value)">
            <option disabled value="">Please select component type</option>
            <option
             v-for="option in componentTypes"
             :key="option.name"
             :value=option.name>{{ option.name }}
            </option>
          </select>
        </div>
      </div>
      <CustomComponent
       v-for="component in filteredComponents"
       :key="component.id"
       :component="component"
       @component-deleted="componentDeletedHanler"/>
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
import repositoryFactory from "~/repositories/repositoryFactory";
// import {getUserFromToken} from "~/server/utils/auth";

definePageMeta({
  layout: 'admin',
  // middleware: [
  //   function (to, from) {
  //     // Custom inline middleware
  //   },
  //   'auth',
  // ],
});

const components = ref([]);
const user = ref({});
const searchInputValue = ref('');
const isLoaded = ref(false);
const componentTypes = ref([]);
const selectedOption = ref('accordion');

isLoaded.value = false;

const fetchUser = async () => {
  try {
    const userEmail = localStorage.getItem('userEmail');
    const token = localStorage.getItem('token');

    console.log(userEmail);
    console.log(token);

    // getUserFromToken(token);

    const data = await repositoryFactory.get('User').getUser(userEmail);

    console.log('user data: ', data);

    user.value = data?.user || {};
  } catch (err) {
    console.log(err);
  }
};

const fetchData = async (query = 'accordion') => {
  try {
    const data = await repositoryFactory.get('Component').get(query);
    components.value = data?.components || [];
    isLoaded.value = true;
  } catch (err) {
    console.log(err);
  }
};

const fetchTypes = async() => {
  try {
    const data = await repositoryFactory.get('Component').getTypes();
    if (data) {
      componentTypes.value = {...data.componentTypes};
    }
  } catch (err) {
    console.log(err);
  }
};

onMounted(async() => {
  // await fetchUser();
  await fetchTypes();
  await fetchData();
});

const filteredComponents = computed(() => {
  if (components.value.length === 0) {
    return [];
  }
  if (searchInputValue.value.length === 0) {
    return components.value;
  }
  return components.value.filter(component => component?.content?.title?.toLowerCase()?.includes(searchInputValue.value.toLowerCase()));
});

const componentDeletedHanler = async () => {
  await fetchData();
};

//Select types logic
const editorChangeHandler = async (inputName, editorContent) => {
  if (inputName === 'type') {
    selectedOption.value = editorContent;
  }
  await fetchData(selectedOption.value);
};
</script>


<style>
@import "bulma/css/bulma.css";
</style>