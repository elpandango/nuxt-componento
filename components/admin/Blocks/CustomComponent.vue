<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="title">{{component.title}}</div>
      <div class="type">Component type: <strong>{{component.type}}</strong></div>
      <div class="content">
<!--        <CodeBlock :code="component.code" lang="javascript" />-->
        <Shiki lang="js" code="console.log('hello');" as="span" />
<!--        <pre>-->
<!--          <code class="language-html" v-text="component.content.code"></code>-->
<!--        </pre>-->
      </div>
      <div class="columns is-mobile has-text-grey-light mt-2">
        <small class="column">{{dateFormatted}}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
          :to="`admin/edit-component/${component._id}`"
          class="card-footer-item">Edit
      </RouterLink>
      <a
          @click.prevent="handleDeleteClicked"
          href="#"
          class="card-footer-item">Delete</a>
    </footer>
<!--    <ModalDeleteComponent-->
<!--        v-if="modals.deleteComponent"-->
<!--        v-model="modals.deleteComponent"-->
<!--        :componentId="component.id"/>-->
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import { useDateFormat } from '@vueuse/core';
// import ModalDeleteComponent from "@/components/Blocks/ModalDeleteComponent.vue";
// import "prismjs/themes/prism-tomorrow.min.css";

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

  // console.log(props.component);

  let date = new Date(parseInt(props.component.createdAt));
  let formattedDate = useDateFormat(date, 'DD-MM-YYYY HH:mm');
  // return formattedDate.value;
  return props.component.createdAt;
});
</script>

<style>
.type {
  margin-bottom: 12px;
}
.content pre {
  background-color: black;
}
</style>
