<template>
  <div id="app">
      <sidebar></sidebar>
      <div class="main">
        <router-view></router-view>
      </div>
      <a href="https://medium.com/@iamqamarali" target="_blank" class="blog-link">Blog</a>
  </div>
</template> 

<script>
import sidebar from './components/sidebar'

export default {   
    components:{
      sidebar
    },
    data(){
      return{
      }
    },
    methods:{
    }
}
</script>


<style lang="sass">
@import "./styles/app"


</style>
