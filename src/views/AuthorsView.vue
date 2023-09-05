<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthorStore } from '../stores/author'

  const { authors } = storeToRefs(useAuthorStore())
  const { fetchAuthors } = useAuthorStore()

  fetchAuthors()
</script>

<template>
    <div v-if="authors" class="list-all-authors">
        <ul  v-for="author in authors" :key="author.id">
            <li>
            <RouterLink class="exactLink" :to="`/author/${author.username}`">{{ author.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.exactLink {
    font-size: 22px;
    margin: 20px;
    color: black;
}
.list-all-authors {
  background-color: white;
  padding: 10px;
}
ul li {
  list-style-type: circle;
  color: black;
}
</style>
