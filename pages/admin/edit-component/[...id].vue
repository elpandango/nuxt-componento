<template>
  <div class="edit-notes">
    <AddEditComponent v-if="isLoaded"
                      label="Edit Component"
                      @dataUpdated="updateFormHandler"
                      :component-data="componentContent">
      <template v-slot:buttons>
        <button
         @click="$router.back()"
         class="button is-link is-light mr-2">Cancel
        </button>
        <button
         @click="handleSaveClicked"
         :disabled="changesCounter === 0"
         class="button is-link has-background-link">Save Changes
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
const route = useRoute();

const isLoaded = ref(false);
const componentContent = ref({});
const changesCounter = ref(0);
let newComponent = reactive({});

const updateFormHandler = (data) => {
  newComponent = {...data};
  changesCounter.value++;
};

const componentId = route.params.id;

try {
  const data = await repositoryFactory.get('Component').getComponent(componentId);
  if (data) {
    componentContent.value = {...data.component};
    isLoaded.value = true;
  }

} catch (err) {
  console.log(err);
}

const handleSaveClicked = async () => {
  try {
    await repositoryFactory.get('Component').update(componentId, {
      title: newComponent.title,
      type: newComponent.type || 'input',
      code: newComponent.code,
    });

    await router.push('/admin/all-components');
  } catch (err) {
    console.log(err);
  }
};
</script>
