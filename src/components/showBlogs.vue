<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog" class="single-blog">
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://my-json-server.typicode.com/Maculaspe/blog/posts').then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0,2);
    })
  }
}
</script>

<style>
  
</style>