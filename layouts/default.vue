<template>
  <div class="page-content">
    <Sidebar>

      <router-link class="sidebar-link"
                   active-class="active"
                   to="/color-palette">Color Palette
      </router-link>

      <Accordion height="32px"
                 is-active-on-init="true">
        <template v-slot:header>
          <div class="link-text">Components</div>
        </template>
        <template v-slot:accordion-body>
          <ul class="link-sublist">
            <li>
              <router-link
               to="/components"
               class="accordion-item"
               active-class="active"
               tag="li">Accordions
              </router-link>
            </li>
            <li>
              <router-link
               to="/inputs"
               class="accordion-item"
               active-class="active"
               tag="li">Input
              </router-link>
            </li>
            <li>
              <router-link
               to="/skeletons"
               class="accordion-item"
               active-class="active"
               tag="li">Skeleton-boxes
              </router-link>
            </li>
            <li class="accordion-item">Textarea</li>
            <li>
              <router-link
               to="/buttons"
               class="accordion-item"
               active-class="active"
               tag="li">Button
              </router-link>
            </li>
            <li class="accordion-item">Progressbar</li>
            <li class="accordion-item">Forma</li>
          </ul>
        </template>
      </Accordion>

    </Sidebar>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "~/components/sidebars/Sidebar.vue";
import Accordion from "~/components/accordions/Accordion.vue";

import '~/assets/scss/global.scss';
</script>

<style
 scoped
 lang="scss">
.sidebar-link {
  line-height: 32px;
  padding: 0 8px;
  font-size: 18px;
  text-decoration: none;
  display: block;
  border-radius: 4px;
  transition: all .3s;

  &:hover {
    background-color: var(--neutral-500);
  }

  &.active {
    font-weight: bold;
    background-color: var(--neutral-600);
  }
}

.accordion-item {
  line-height: 32px;
  display: block;
  text-decoration: none;
  border-radius: 4px;
  transition: all .3s;
  padding: 0 8px;

  &:hover {
    background-color:var(--neutral-500);
  }

  &.active {
    font-weight: bold;
    background-color: var(--neutral-600);
  }
}

.link-text {
  font-size: 18px;
  padding: 0 8px;
}
</style>