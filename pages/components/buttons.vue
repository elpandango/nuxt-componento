<template>
  <div class="text-page-content">
    <div class="container">
      <h1 class="text-page-title">Buttons</h1>
      <div class="component-description">
        Here you can use our basic Buttons with different <b>sizes</b>:
      </div>

      <div class="demo-block">
        <h3 class="page-subtitle">Small Button</h3>
        <DemonstrationBox>
          <template v-slot:demo-slot>
            <Button label="Small Button"
                    size="small">
            </Button>
          </template>
          <template v-slot:code-slot>
            <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.small"></code>
</pre>
            </ClientOnly>
          </template>
        </DemonstrationBox>
      </div>

      <div class="demo-block">
        <h3 class="page-subtitle">Basic Button</h3>
        <DemonstrationBox>
          <template v-slot:demo-slot>
            <Button label="Default Button">
            </Button>
          </template>
          <template v-slot:code-slot>
            <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.basic"></code>
</pre>
            </ClientOnly>
          </template>
        </DemonstrationBox>
      </div>

      <div class="demo-block">
        <h3 class="page-subtitle">Large Button</h3>
        <DemonstrationBox>
          <template v-slot:demo-slot>
            <Button label="Large Button"
                    size="big">
            </Button>
          </template>
          <template v-slot:code-slot>
            <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.big"></code>
</pre>
            </ClientOnly>
          </template>
        </DemonstrationBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import Button from "~/components/buttons/BaseButton.vue";
import {onMounted} from "vue";
import {useDecodeHtmlEntities} from '~/use/useDecodeHtml.js';
import {usePrismInitialization, usePrismHighlighting} from '~/use/usePrismInitialization.js';
import repositoryFactory from "~/repositories/repositoryFactory";

const components = ref([]);

let templateComponent = reactive({
  basic: null,
  small: null,
  medium: null,
  big: null,
});

// Component types enums
const ComponentType = {
  Basic: 'Basic Button',
  Small: 'Small Button',
  Medium: 'Medium Button',
  Big: 'Large Button',
};

onMounted(async () => {
  const data = await repositoryFactory.get('Component').get('button');
  components.value = data?.components || [];
  components.value.forEach(component => {

    console.log(component);

    const replacedValue = useDecodeHtmlEntities(component.code);

    switch (component.title) {
      case ComponentType.Basic:
        templateComponent.basic = replacedValue;
        break;
      case ComponentType.Small:
        templateComponent.small = replacedValue;
        break;
      case ComponentType.Medium:
        templateComponent.medium = replacedValue;
        break;
      case ComponentType.Big:
        templateComponent.big = replacedValue;
        break;
    }
  });

  usePrismInitialization();
  usePrismHighlighting();
});

</script>
