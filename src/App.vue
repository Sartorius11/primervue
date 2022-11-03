<template>
  <MenuComponent/>
  <hr/>
   <router-view></router-view>


  
 <!-- <HolaMundo/>
<HomeComponents/>
<CineComponents/>
<MusicaComponents/> -->

</template>

<script>
import MenuComponent from '././components/MenuComponent.vue';

// import CineComponents from '././components/CineComponent.vue';
// import HomeComponents from '././components/HomeComponent.vue';
// import MusicaComponents from '././components/MusicaComponent.vue';

export default {
  name: 'App',
  components: {
    
    // HomeComponents,
 
    MenuComponent   // CineComponents,
    // MusicaComponents

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>