<template>
  <div class="index-page-content">
    <div class="container">
      <h1 class="text-page-title text-center">Vue Componento</h1>
      <div class="page-slogan">
        Modern. Convenient. Swift.
      </div>

      <div class="description">
        <p>
          Our library is designed to help you easily and swiftly create a wide range of
          templates for your projects. With an extensive collection of components, you can effortlessly build sleek and
          responsive user interfaces, saving you time and effort in the development process. Whether you're working on web
          applications, websites, or other projects, our library provides the building blocks you need to bring your
          designs
          to life. Explore our components today and streamline your development workflow!
        </p>
      </div>

      <div class="btn-block">
        <RouterLink
         to="/"
         class="btn-default">To Components List
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style
    lang="scss">
.index-page-content {
  min-height: 100vh;
  display: flex;

  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }


  .page-slogan {
    font-size: 32px;
    text-align: center;
    margin-bottom: 26px;
  }

  .description {
    max-width: 850px;
    margin: 0 auto 32px;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
  }

  .btn-block {
    margin: 0 auto;
    text-align: center;
  }

  .btn-default {
    align-items: center;
    background-color: var(--primary-default);
    border: none;
    border-radius: 4px;
    color: #fff;
    display: inline-flex;
    font-size: 16px;
    height: 48px;
    justify-content: center;
    line-height: 1.5;
    outline: none;
    transition: all .3s;
    text-decoration: none;
    padding: 0 24px;

    &:hover {
      background-color: var(--primary-hover);
    }
  }
}
</style>
