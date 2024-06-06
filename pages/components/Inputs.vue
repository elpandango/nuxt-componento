<template>
  <div>
    <h1>Inputs</h1>
    <div class="demo-block">
      <h3 class="page-subtitle">Basic Input</h3>
      <div class="component-description">
        Here you can use our basic Inputs with different <b>sizes</b>:
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicSmallInputValue"
                     label="Small Input"
                     size="small"/>

          <p>Input value: <b>{{ basicSmallInputValue }}</b></p>
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
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicDefaultInputValue"
                     label="Default Input"/>
          <p>Input value: <b>{{ basicDefaultInputValue }}</b></p>
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
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicMediumInputValue"
                     label="Medium Input"
                     size="medium"/>
          <p>Input value: <b>{{ basicMediumInputValue }}</b></p>
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.medium"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicBigInputValue"
                     label="Large Input"
                     size="big"/>
          <p>Input value: <b>{{ basicBigInputValue }}</b></p>
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

    <div class="demo-block">
      <h3 class="page-subtitle">Input with status</h3>
      <div class="component-description">
        Here you can use our Inputs with different <b>statuses</b>:
      </div>

      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicSuccessInputValue"
                     label="Input with success status"
                     status="success"
          />
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.success"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicInfoInputValue"
                     label="Input with info status"
                     status="info"
          />
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.info"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicErrorInputValue"
                     label="Input with error status"
                     status="error"
                     error-message="Oops, something went wrong"/>
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.error"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <BaseInput v-model="basicWarningInputValue"
                     label="Input with warning status"
                     status="warning"
          />
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.warning"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <h3 class="page-subtitle">Input with float label</h3>
      <div class="component-description">
        Here you can use our Inputs with <b>float labels</b>:
      </div>

      <DemonstrationBox>
        <template v-slot:demo-slot>
          <FloatLabelInput v-model="basicFloatInputValue"
                           label="Input with float label"/>
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.basicFloat"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block">
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <FloatLabelInput v-model="bigFloatInputValue"
                           size="big"
                           status="warning"
                           label="Large input with float label"/>
        </template>
        <template v-slot:code-slot>
          <ClientOnly>
<pre>
<code class="language-html" v-html="templateComponent.bigFloat"></code>
</pre>
          </ClientOnly>
        </template>
      </DemonstrationBox>
    </div>

  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import {onMounted} from "vue";
import {useDecodeHtmlEntities} from '~/use/useDecodeHtml.js';
import {usePrismHighlighting} from '~/use/usePrismInitialization.js';
import BaseInput from "~/components/inputs/BaseInput.vue";
import FloatLabelInput from "~/components/inputs/FloatLabelInput.vue";
import repositoryFactory from "~/repositories/repositoryFactory";

const components = ref([]);

let templateComponent = reactive({
  basic: null,
  small: null,
  medium: null,
  big: null,
  success: null,
  warning: null,
  info: null,
  error: null,
  basicFloat: null,
  bigFloat: null,
});

// Component types enums
const ComponentType = {
  Small: 'Small Input',
  Basic: 'Basic Input',
  Medium: 'Medium Input',
  Big: 'Large Input',
  SuccessInput: 'Success Input Status',
  InfoInput: 'Info Input Status',
  WarningInput: 'Warning Input Status',
  ErrorInput: 'Error Input Status',
  BasicFloat: 'Basic Float Input',
  WarningFloatInput: 'Warning Float Input Status',
};

const basicSmallInputValue = ref('');
const basicDefaultInputValue = ref('');
const basicMediumInputValue = ref('');
const basicBigInputValue = ref('');
const basicSuccessInputValue = ref('');
const basicInfoInputValue = ref('');
const basicWarningInputValue = ref('');
const basicErrorInputValue = ref('');
const basicFloatInputValue = ref('');
const bigFloatInputValue = ref('');

onMounted(async () => {
  const data = await repositoryFactory.get('Component').get('input');
  components.value = data?.components || [];
  components.value.forEach(component => {
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
      case ComponentType.SuccessInput:
        templateComponent.success = replacedValue;
        break;
      case ComponentType.InfoInput:
        templateComponent.info = replacedValue;
        break;
      case ComponentType.WarningInput:
        templateComponent.warning = replacedValue;
        break;
      case ComponentType.ErrorInput:
        templateComponent.error = replacedValue;
        break;
      case ComponentType.BasicFloat:
        templateComponent.basicFloat = replacedValue;
        break;
      case ComponentType.WarningFloatInput:
        templateComponent.bigFloat = replacedValue;
        break;
    }
  });

  if (process.client) {
    usePrismHighlighting();
  }
});
</script>