<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/post'

  const { posts, loading, error } = storeToRefs(usePostStore()) //Creates an object of references with all the state, getters (explanation for storeToRefs)
  const { fetchPosts } = usePostStore()

  fetchPosts()
</script>

<template>
  <div class="header-title">
    <h1 class="header-title__content">Posts via Pinia store:</h1>
  </div>
  <div class="post">

    <div class="card flex justify-content-center">
        <ProgressSpinner  v-if="loading" style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>

    <div v-if="error">{{ error.message }}</div>
    
    <div v-if="posts"> 
    <div class="posts-section" v-for="post in posts" :key="post.id">
          <div>
            <RouterLink :to="`/post/${post.id}`" style="text-decoration: none; color: inherit;"> {{ post.title }}</RouterLink>
          </div>
          <p>{{ post.body }}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
.header-title {
  text-align: center;
}
.post {
  font-size: 1em;
  padding-left: 25px;
  padding-right: 25px;
}
.header-title, .post p {
  color: black;
}
.header-title__content {
  margin: 15px auto;
}
.posts-section {
  background: white;
  margin-top: 19px;
  border-radius: 8px;
  padding: 12px;
}
</style>
