<script setup>
import { RouterLink, RouterView } from 'vue-router'

function clickLogo() {
let link = 'http://localhost:5173/';
  window.open(link, "_self");
}


</script>

<template>
  <header>
    <img src="./assets/logo.svg" class="logo-vue" alt="vue logo" v-on:click="clickLogo">

   <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
        <RouterLink to="/authors">Authors</RouterLink>
  </nav>
  </header>
  <RouterView />

</template>

<style scoped lang="scss">

header {
  display: flex;
  gap: 27px;
  background-color: #01679C ;
  padding: 1rem 0;
}
nav {
  width: 100%;
  text-align: left;
}
.logo-vue {
  width: 44px;
  height: 30px;
  margin-left: 8px;
}
.logo-vue:hover {
  cursor: pointer;
}
.p-paginator {
  border-radius: 2px!important;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
