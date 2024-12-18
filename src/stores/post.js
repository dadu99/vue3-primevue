import { defineStore } from "pinia";

export const usePostStore = defineStore({ //link to doc https://blog.logrocket.com/complex-vue-3-state-management-pinia/
  id: "post",
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null,
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) =>
        state.posts.filter((post) => post.userId === authorId); //to get how many posts an author has written
    },
  },
  actions: {
    async fetchPosts() {
      //all posts
      this.posts = [];
      this.loading = true;
      try {
        this.posts = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => response.json()); 
        console.log(this.posts);
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPost(id) {
      //fetch single post
      this.post = null;
      this.loading = true;
      try {
        this.post = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
