<script setup>
  import { RouterLink } from 'vue-router'

  defineProps(['author', 'posts'])
</script>

<template>
  <div class="author-section">
    <h1>{{author.name}}</h1>
    <p> The {{author.name}} has {{posts.length}} posts written</p>
    <p v-for="post in posts" :key="post.id">
      <RouterLink class="exact-link-author" :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.author-section {
    margin: 30px;
    background-color: white;
    border-radius: 5px;
    padding: 22px;
}
h1 {
    text-align: center;
    color: #00284C;
}
p {
    color: black;
    font-weight: 300;
}
.exact-link-author {
    color: black
}
</style>
