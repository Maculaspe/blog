<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div class="single-blog"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://my-json-server.typicode.com/Maculaspe/blog').then(function(data){
      console.log(data);
    })
  }
}
</script>

<style>
  
</style>