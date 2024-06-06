<template>
  <div>
    <h1>Accordions</h1>
    <div class="demo-block">
      <h3 class="page-subtitle">Basic Accordion</h3>
      <div class="component-description">
        Here you can use our basic Accordion component with its default styling.
        Also you can set the Accordion to be opened by default, just adding
        is-active-on-init="true" parameter.
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <div class="accordions-block">
            <Accordion type="basic"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title</div>
              </template>
              <template v-slot:accordion-body>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias aspernatur assumenda dolorum iure mollitia
                  nemo tempora? Alias amet cupiditate,
                  dicta earum eum maiores nemo repellat?</p>
              </template>
            </Accordion>
            <Accordion type="basic"
                       class="mar-b-1"
                       is-active-on-init="true">
              <template v-slot:header>
                <div class="link-text">Accordion Title 2</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
            <Accordion type="basic"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title 3</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
          </div>
        </template>
        <template v-slot:code-slot>
        <pre>
        <code class="language-html" v-html="templateComponent.group"></code>
      </pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <h3 class="page-subtitle">Basic Accordion without caret</h3>
      <div class="component-description">
        Here you can use our basic Accordion component with its default styling,
        but without caret.
        Also you can add aligning of header text.
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <div class="accordions-block">
            <Accordion type="basic"
                       no-caret="true"
                       align="center"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title</div>
              </template>
              <template v-slot:accordion-body>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias aspernatur assumenda dolorum iure mollitia
                  nemo tempora? Alias amet cupiditate,
                  dicta earum eum maiores nemo repellat?</p>
              </template>
            </Accordion>
            <Accordion type="basic"
                       no-caret="true"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title 2</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
            <Accordion type="basic"
                       no-caret="true"
                       align="right"
                       class="mar-b-1">
              <template v-slot:header>
                <div class="link-text">Accordion Title 3</div>
              </template>
              <template v-slot:accordion-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur dicta esse mollitia! Labore, quae,
                similique?
              </template>
            </Accordion>
          </div>
        </template>
        <template v-slot:code-slot>
        <pre>
          <code class="language-html" v-html="templateComponent.noCaret"></code>
        </pre>
        </template>
      </DemonstrationBox>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import Accordion from "~/components/accordions/Accordion.vue";
import {onMounted} from "vue";
import {useStoreComponents} from "@/stores/storeComponents.js";
import {useDecodeHtmlEntities} from '~/use/useDecodeHtml.js';
import {usePrismInitialization, usePrismHighlighting} from '~/use/usePrismInitialization.js';

const storeComponents = useStoreComponents();
const components = ref([]);

let templateComponent = reactive({
  noCaret: null,
  group: null,
});

// Component types enums
const ComponentType = {
  AccordionWithoutCaret: 'Accordion without caret',
  AccordionGroup: 'Accordion Group'
};

onMounted(async () => {
  components.value = storeComponents.getComponentByType('accordion');
  components.value.forEach(component => {
    const replacedValue = useDecodeHtmlEntities(component.content.code);

    switch (component.content.title) {
      case ComponentType.AccordionWithoutCaret:
        templateComponent.noCaret = replacedValue;
        break;
      case ComponentType.AccordionGroup:
        templateComponent.group = replacedValue;
        break;
    }
  });

  if (process.client) {
    usePrismHighlighting();
  }
});
</script>