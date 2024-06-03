<template>
  <div
      class="custom-dropdown"
      :class="[{'active' : isOpen}]">
    <div
        class="select-styled"
        :style="{minWidth: minWidth}"
        @click="toggleDropdown">
      <span id="selected-value">
        <slot name="header"></slot>
      </span>
    </div>
    <div
        class="select-options-wrap"
        :style="[{minWidth: minWidth}, {width: dropdownWidth ?? '100%'}]"
        :class="[dropdownAlign === 'left' ? 'left-side' : 'right-side', noBorder ? 'no-border' : '', withShadow ? 'with-shadow' : '']"
        ref="options-wrap">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  options: {
    type: Object
  },
  classes: {
    type: String
  },
  initialData: {
    type: String
  },
  bgIsTransparent: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: 'down'
  },
  dropdownAlign: {
    type: String,
    default: 'left'
  },
  minWidth: {
    type: String
  },
  dropdownWidth: {
    type: String
  },
  presetsData: {
    type: Object,
    default: () => ({
      'Top 3': {
        min: 1,
        max: 3
      },
      'Top 5': {
        min: 1,
        max: 5
      },
      'Top 10': {
        min: 1,
        max: 10
      },
      'Top 30': {
        min: 1,
        max: 30
      },
      'Top 50': {
        min: 1,
        max: 50
      },
    })
  },
  dataUpdated: {
    required: false
  },
  dropdownInGlobalBlock: {
    type: Boolean,
    default: false
  },
  withIcon: {
    type: Boolean,
    default: true
  },
  withShadow: {
    type: Boolean,
    default: false
  },
  noBorder: {
    type: Boolean,
    default: false
  },
  closeDropdown: {
    type: Number,
    required: false
  },
});

const isOpen = ref(false);
let selectedOption = ref({value: null, label: 'Please select one'});

const options = ref([
  {value: 'option1', label: 'Option 1'},
  {value: 'option2', label: 'Option 2'},
  {value: 'option3', label: 'Option 3'}
]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption = {...option};
  isOpen.value = false;
}

</script>

<style
    src="./styles.scss"
    scoped
    lang="scss"></style>
