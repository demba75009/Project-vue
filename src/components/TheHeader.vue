<template>
  <div class="TheHeader">
    <nav class="navbar bg-light">
      <router-link class="btn btn-outline-info" to="/UserList">
        User
      </router-link>

      <router-link class="  btn btn-outline-primary" to="/Like">
        ;)
      </router-link>

      <router-link class="  btn btn-outline-danger" to="/AddUser">
        AddUser
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader",

  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
