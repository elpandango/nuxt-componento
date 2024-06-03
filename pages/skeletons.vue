<template>
  <div>
    <h1>Skeletons</h1>
    <p class="mar-b-10">Skeleton is an animated placeholder that displays instead of content during page load. <br/>It mimics the structure of
      the content, enhancing the perception of load speed and improving the user experience.</p>
    <div class="demo-block mar-b-10">
      <h3 class="page-subtitle">Basic Skeleton</h3>
      <div class="component-description">
        Here are our basic Skeleton-boxes with full-length
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <h2 class="title"
              :class="{'skeleton-box': isSkeletonClassActive}">Title</h2>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;h2 class="title skeleton-box"&gt;Title&lt;/h2&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block mar-b-10">
      <div class="component-description">
        ...and our basic Skeleton-boxes with short length:
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <h2 class="title"
              :class="{'skeleton-box-short': isSkeletonClassActive}">Short Title</h2>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;h2 class="title skeleton-box-short"&gt;Short Title&lt;/h2&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block mar-b-10">
      <h3 class="page-subtitle">Skeleton Blocks</h3>
      <div class="component-description">
        Here you can use Skeleton blocks:
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <div class="skeleton-block"></div>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;div class="skeleton-block"&gt;&lt;/div&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block mar-b-10">
      <div class="component-description">
        Also you can change skeleton block height by adding text into it.
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <div class="skeleton-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error odit sed tempora. Cupiditate, dolores ducimus eveniet hic id ipsam ipsum labore magnam molestias non porro quasi quibusdam quos rem totam unde voluptate. Ad aliquid assumenda, culpa, deserunt dolores eius eligendi eos ipsa ipsum laborum obcaecati quidem quod repellendus tempora tempore totam voluptatum. At, dicta?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error odit sed tempora. Cupiditate, dolores ducimus eveniet hic id ipsam ipsum labore magnam molestias non porro quasi quibusdam quos rem totam unde voluptate. Ad aliquid assumenda, culpa, deserunt dolores eius eligendi eos ipsa ipsum laborum obcaecati quidem quod repellendus tempora tempore totam voluptatum. At, dicta?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error odit sed tempora. Cupiditate, dolores ducimus eveniet hic id ipsam ipsum labore magnam molestias non porro quasi quibusdam quos rem totam unde voluptate. Ad aliquid assumenda, culpa, deserunt dolores eius eligendi eos ipsa ipsum laborum obcaecati quidem quod repellendus tempora tempore totam voluptatum. At, dicta?
          </div>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;div class="skeleton-block"&gt;
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error odit sed tempora. Cupiditate, dolores ducimus eveniet hic id ipsam ipsum labore magnam molestias non porro quasi quibusdam quos rem totam unde voluptate. Ad aliquid assumenda, culpa, deserunt dolores eius eligendi eos ipsa ipsum laborum obcaecati quidem quod repellendus tempora tempore totam voluptatum. At, dicta?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error odit sed tempora. Cupiditate, dolores ducimus eveniet hic id ipsam ipsum labore magnam molestias non porro quasi quibusdam quos rem totam unde voluptate. Ad aliquid assumenda, culpa, deserunt dolores eius eligendi eos ipsa ipsum laborum obcaecati quidem quod repellendus tempora tempore totam voluptatum. At, dicta?
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore error odit sed tempora. Cupiditate, dolores ducimus eveniet hic id ipsam ipsum labore magnam molestias non porro quasi quibusdam quos rem totam unde voluptate. Ad aliquid assumenda, culpa, deserunt dolores eius eligendi eos ipsa ipsum laborum obcaecati quidem quod repellendus tempora tempore totam voluptatum. At, dicta?
&lt;/div&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block mar-b-10">
      <h3 class="page-subtitle">Skeleton lines</h3>
      <div class="component-description">
        Skeleton lines could be used, when you need to replace text-lines etc.
        Every <b>&lt;div>&lt;/div></b> add a new line.
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <div class="skeleton-box-lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;div class="skeleton-box-lines"&gt;
  &lt;div>&lt;/div>
  &lt;div>&lt;/div>
  &lt;div>&lt;/div>
  &lt;div>&lt;/div>
&lt;/div&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block mar-b-10">
      <h3 class="page-subtitle">Images Skeleton</h3>
      <div class="component-description">
        Images also can be replaced by Skeleton-boxes.
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <figure class="image size-16x16"
                  :class="{'skeleton-box': isSkeletonClassActive}">
            <img src="https://picsum.photos/16" alt="Image demo">
          </figure>
          <br/>
          <figure class="image size-32x32"
                  :class="{'skeleton-box': isSkeletonClassActive}">
            <img src="https://picsum.photos/32" alt="Image demo">
          </figure>
          <br/>
          <figure class="image size-64x64"
                  :class="{'skeleton-box': isSkeletonClassActive}">
            <img src="https://picsum.photos/64" alt="Image demo">
          </figure>
          <br/>
          <figure class="image size-128x128"
                  :class="{'skeleton-box': isSkeletonClassActive}">
            <img src="https://picsum.photos/128" alt="Image demo">
          </figure>
          <br/>
          <figure class="image size-256x256"
                  :class="{'skeleton-box': isSkeletonClassActive}">
            <img src="https://picsum.photos/256" alt="Image demo">
          </figure>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;figure class="image size-16x16 skeleton-box"&gt;
  &lt;img src="https://picsum.photos/16" alt="Image demo">
&lt;/figure&gt;
&lt;figure class="image size-32x32 skeleton-box"&gt;
  &lt;img src="https://picsum.photos/32" alt="Image demo">
&lt;/figure&gt;
&lt;figure class="image size-64x64 skeleton-box"&gt;
  &lt;img src="https://picsum.photos/64" alt="Image demo">
&lt;/figure&gt;
&lt;figure class="image size-128x128 skeleton-box"&gt;
  &lt;img src="https://picsum.photos/128" alt="Image demo">
&lt;/figure&gt;
&lt;figure class="image size-256x256 skeleton-box"&gt;
  &lt;img src="https://picsum.photos/256" alt="Image demo">
&lt;/figure&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>

    <div class="demo-block mar-b-10">
      <div class="component-description">
       You can also use Skeleton-boxes for more complex HTML structures:
      </div>
      <DemonstrationBox>
        <template v-slot:demo-slot>
          <article class="article-item">
            <div class="article-poster">
              <a class="poster-link">
                <figure class="image"
                        :class="{'skeleton-box': isSkeletonClassActive}">
                  <img src="https://picsum.photos/700/300">
                </figure>
              </a>
            </div>
            <div class="article-content">
              <div class="text-content">
                <a>
                  <h3 class="article-title"
                      :class="{'skeleton-box': isSkeletonClassActive}">Lorem ipsum dolor sit amet, consectetur.</h3>
                </a>
                <div class="article-description">
                  <div class="skeleton-box-lines"
                       v-if="isSkeletonClassActive">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <template v-else>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aperiam cum
                      cupiditate doloribus dolorum esse et eum hic id impedit inventore ipsa ipsam ipsum iste iure magni
                      maxime nihil nobis odit pariatur provident, quia ratione repellat repellendus repudiandae saepe
                      tenetur totam vero voluptate. Tempore!
                    </p>
                  </template>
                </div>
              </div>
              <div class="article-meta">
                <div class="date"
                     :class="{'skeleton-box-short': isSkeletonClassActive}">2024 May 30
                </div>
                <a>
                  <span :class="{'skeleton-box-short': isSkeletonClassActive}">Read more</span>
                </a>
              </div>
            </div>
          </article>
        </template>
        <template v-slot:code-slot>
<pre class="default-positioning">
<code class="language-markup">
&lt;article class="article-item"&gt;
  &lt;div class="article-poster">
    &lt;a class="poster-link">
      &lt;figure class="image skeleton-box">
        &lt;img src="https://picsum.photos/700/300">
      &lt;/figure>
    &lt;/a>
  &lt;/div>
  &lt;div class="article-content">
    &lt;div class="text-content">
      &lt;a>
        &lt;h3 class="article-title skeleton-box">Lorem ipsum dolor sit amet, consectetur.&lt;/h3>
      &lt;/a>
      &lt;div class="article-description">
        &lt;div class="skeleton-box-lines">
          &lt;div>&lt;/div>
          &lt;div>&lt;/div>
          &lt;div>&lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
    &lt;div class="article-meta">
      &lt;div class="date skeleton-box-short">2024 May 30
      &lt;/div>
      &lt;a>
        &lt;span class="skeleton-box-short">Read more&lt;/span>
      &lt;/a>
    &lt;/div>
  &lt;/div>
&lt;/article&gt;
</code>
</pre>
        </template>
      </DemonstrationBox>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, ref} from "vue";
import {onMounted} from "vue";
import {usePrismInitialization, usePrismHighlighting} from '@/use/usePrismInitialization.js';

const isSkeletonClassActive = ref(true);
const intervalId = ref(null);

const skeletonClassTrigger = () => {
  isSkeletonClassActive.value = !isSkeletonClassActive.value;
};

onMounted(async () => {
  intervalId.value = setInterval(skeletonClassTrigger, 3000);
   usePrismInitialization();
  usePrismHighlighting();
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
})
</script>

<style lang="scss" scoped>
.poster-link {
  display: block;
  margin-bottom: 16px;
}

.article-description {
  line-height: 24px;
  margin-bottom: 16px;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: var(--table-color-text);
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .date {
    display: inline-block;
    width: auto;
  }
}
</style>