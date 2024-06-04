<template>
  <div class="stats">
    <AddEditComponent @dataUpdated="updateFormHandler">
      <template v-slot:buttons>
        <button
         @click="$router.back()"
         class="button is-link is-light mr-2">Cancel
        </button>
        <button
            @click="addComponent"
            :disabled="changesCounter === 0"
            class="button is-link">Add New Component
        </button>
      </template>
    </AddEditComponent>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import AddEditComponent from "~/components/admin/Blocks/AddEditComponent.vue";
import repositoryFactory from "~/repositories/repositoryFactory";

definePageMeta({
  layout: 'admin'
});

const router = useRouter();

const changesCounter = ref(0);
let newComponent = reactive({});

const updateFormHandler = (data) => {
  newComponent = {...data};
  changesCounter.value++;
};

const addComponent = async () => {
  try {
    await repositoryFactory.get('Component').add({
      title: newComponent.title,
      type: newComponent.type || 'input',
      code: newComponent.code,
    });

   await router.push('/admin/all-components');
  } catch(err) {
    console.log(err);
  }
};
</script>
