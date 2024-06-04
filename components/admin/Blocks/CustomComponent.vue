<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="title">{{ component.title }}</div>
      <div class="type">Component type: <strong>{{ component.type }}</strong></div>
      <div class="content">
        <ClientOnly>
<pre>
<code class="language-html" v-text="component.code"></code>
</pre>
        </ClientOnly>
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{ dateFormatted }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
       :to="`/admin/edit-component/${component._id}`"
       class="card-footer-item">Edit
      </RouterLink>
      <a
       @click.prevent="handleDeleteClicked"
       href="#"
       class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteComponent
     v-if="modals.deleteComponent"
     v-model="modals.deleteComponent"
     :componentId="component._id"
     @component-deleted="componentDeleted"/>
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import ModalDeleteComponent from "~/components/admin/Blocks/ModalDeleteComponent.vue";
import "prismjs/themes/prism-tomorrow.min.css";

const emit = defineEmits(['component-deleted']);

const props = defineProps({
  component: {
    type: Object,
    required: true
  }
});

const handleDeleteClicked = () => {
  modals.deleteComponent = true;
};

const modals = reactive({
  deleteComponent: false,
});

const dateFormatted = computed(() => {
  let date = new Date(props.component.createdAt);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  return `${day}-${month}-${year} / ${hours}:${minutes}`;
});

const componentDeleted = () => {
  emit('component-deleted');
};
</script>

<style>
.type {
  margin-bottom: 12px;
}

.content pre {
  background-color: black;
}
</style>
