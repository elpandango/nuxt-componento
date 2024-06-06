<template>
  <div class="color-palette-page">
    <div class="container">
      <h1 class="text-page-title">Color Palette</h1>

      <div class="demo-block mar-b-10">
        <h3 class="page-subtitle">Text colors</h3>
        <div class="component-description">
          You can use our <b>CSS-classes</b> to change color of a text.
        </div>

        <AppTable width="100%">
          <template v-slot:table-header>
            <tr>
              <th>Class</th>
              <th>Code Example</th>
              <th>Result Example</th>
            </tr>
          </template>
          <template v-slot:table-body>
            <tr>
              <td>
                <div class="class-wrapper">
                  is-text-link
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;p class="is-text-link"&gt;Text Content&lt;/p&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <p class="is-text-link">Text Content</p>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  is-text-error
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;p class="is-text-error"&gt;Text Content&lt;/p&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <p class="is-text-error">Text Content</p>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  is-text-info
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;p class="is-text-info"&gt;Text Content&lt;/p&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <p class="is-text-info">Text Content</p>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  is-text-warning
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;p class="is-text-warning"&gt;Text Content&lt;/p&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <p class="is-text-warning">Text Content</p>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  is-text-success
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;p class="is-text-success"&gt;Text Content&lt;/p&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <p class="is-text-success">Text Content</p>
              </td>
            </tr>
          </template>
        </AppTable>
      </div>

      <div class="demo-block mar-b-10">
        <h3 class="page-subtitle">Background colors</h3>
        <div class="component-description">
          You can use our <b>CSS-classes</b> to change background-color of a block.
        </div>

        <AppTable width="100%">
          <template v-slot:table-header>
            <tr>
              <th>Class</th>
              <th>Code Example</th>
              <th>Result Example</th>
            </tr>
          </template>
          <template v-slot:table-body>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-link
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-link"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-link">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-error
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-error"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-error">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-info
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-info"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-info">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-warning
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-warning"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-warning">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-success
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-success"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-success">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-gray
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-gray"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-gray">Text Content</div>
                </div>
              </td>
            </tr>
          </template>
        </AppTable>
      </div>

      <div class="demo-block">
        <h3 class="page-subtitle">Combined CSS-classes</h3>
        <div class="component-description">
          Classes could be <b>combined</b>. Here are examples:
        </div>

        <AppTable width="100%">
          <template v-slot:table-header>
            <tr>
              <th>Class</th>
              <th>Code Example</th>
              <th>Result Example</th>
            </tr>
          </template>
          <template v-slot:table-body>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-link is-text-white
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-link is-text-white"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-link is-text-white">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-error is-text-info
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-error is-text-info"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-error is-text-info">Text Content</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="class-wrapper">
                  bg-gray is-text-white
                </div>
              </td>
              <td>
                <div class="code-demo-block pos-relative">
                  <ClientOnly>
<pre class="default-positioning">
<code class="language-markup">&lt;div class="bg-gray is-text-white"&gt;Text Content&lt;/div&gt;</code>
</pre>
                  </ClientOnly>
                  <CopyButton parent-class="code-demo-block"/>
                </div>
              </td>
              <td>
                <div class="demo-div">
                  <div class="bg-gray is-text-white">Text Content</div>
                </div>
              </td>
            </tr>
          </template>
        </AppTable>
      </div>

    </div>
  </div>
</template>

<script setup>
import AppTable from "~/components/tables/AppTable.vue";
import {usePrismHighlighting} from '~/use/usePrismInitialization.js';
import CopyButton from "~/components/copyBtn/CopyButton.vue";

if (process.client) {
  usePrismHighlighting();
}
</script>

<style
 lang="scss">
.class-wrapper {
  padding: 4px 8px;
  background-color: var(--neutral-500);
  display: inline-flex;
  border-radius: 4px;
}

.demo-div {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 140px;
    height: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.color-palette-page {
  .table {
    th:first-child {
      width: 20%;
    }

    th:last-child {
      width: 20%;
    }
  }
}
</style>
