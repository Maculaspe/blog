<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="Search blogs...">
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>


<script>
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://my-json-server.typicode.com/Maculaspe/blog/posts').then(function(data){
      console.log(data);
      this.blogs = data.body.slice(0,3);
    })
  },
  computed: {
    // filteredBlogs: function(){
    //   return this.blogs.filter((blog) => {
    //     return blog.title.match(this.search);
    //   });
    // }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>

<style>
  #show-blogs {
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>