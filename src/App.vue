<template>
  <div id="app">
  
<the-header> </the-header>

<router-view></router-view>

</div>


</template>

<script>


import TheHeader from "./components/TheHeader";

export default {
  name: "App",
  components: {


    TheHeader,

  },


 
};
</script>

<style scoped>


.User{

  padding-top: 10px;
  margin: 30px 10px;
  width: 50%;
  
  float : right
  
  
  }




</style>
