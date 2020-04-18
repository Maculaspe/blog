<template>
  <div>
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
    <!-- <component v-bind:is="component"></component>
    <list-blogs></list-blogs>
    <div class="add">
      <button id="addbtn" v-on:click="addNew">Add new blog</button>
    </div> -->
  </div>
</template>

<script>

// import addBlog from './components/addBlog.vue'
// import showBlogs from './components/showBlogs.vue'
// import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'

export default {
  components: {
    // 'add-blog': addBlog,
    // 'show-blogs': showBlogs,
    // 'list-blogs': listBlogs,
    'app-header': header,
  },
  data() {
    return {
      component: 'show-blogs'
    }
  },
  methods: {
    addNew: function(){
      this.component = 'add-blog'
    }
  }
}
</script>

<style>

  .add {
    text-align: center;
  }

  .addbtn button{
    width: 300px;
    height: 100px;
    background: darkslategray;
  }
</style>
