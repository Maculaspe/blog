<template>
  <div>
    <!-- <add-blog></add-blog>
    <show-blogs></show-blogs> -->
    <component v-bind:is="component"></component>
  </div>
</template>

<script>

import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
  },
  data() {
    return {
      component: 'show-blogs'
    }
  }
}
</script>

<style>

</style>
