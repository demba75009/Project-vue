<template>


  <div>
    <h2>Liste des Publication :</h2>

    <hr class="bg-dark" />

    <div class="User  text-center card" v-for="U in User" :key="U.id">
      <img :src="U.img" />

      <h2 @click="userDetail()">
        {{ U.name }}
      </h2>

      <h4>
        {{ U.prenom }}
      </h4>

      <section>{{ U.publication.slice(0, 100) }} ...</section>

      <button  v-if ="!like" class="btn btn-outline-danger" @click="LikePost1()">
        :)
      </button>

    <transition appear enter-active-class="animate__animated animate__heartBeat">


       <button v-if ="like" class="btn btn-danger" @click="DisLike()">
        :)
      </button>

          </transition>


      <button class="btn btn-outline-warning" @click="deleteUser()">
        Supprimer
      </button>


    </div>

  </div>


</template>

<script>
import { UserBus } from "../main";



export default {
  name: "Hello",
  data() {
    return {
      User: [],
      Like:[],
      like: false,
    };
  },

  created() {
    this.$http
      .get("https://dktmusic-afef7.firebaseio.com/User.json")
      .then((res) => {
        console.log(res.data);

        const data = res.data;

        this.User = Object.keys(data).map((key) => data[key]);

        console.log(this.User);
      })

      .catch((err) => console.log(err));
  },

  methods: {
    LikePost1() {
      this.like = !this.like;

      console.log(this.like);

      if (this.like) {
        UserBus.LikePost({ ...this.User });
      }
    },


     DisLike() {
      this.like = !this.like;


        UserBus.DisLike({ ...this.Like });
      
    },

    deleteUser() {
      UserBus.deleteUser({ ...this.U });
    },

    userDetail() {
      console.log(location.href);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



img {
  border-radius: 50%;
  width: 50%;
}

.User {
  float: right;
  width: 20%;
  margin-right: auto;
}

button {
  width: 50%;
}

h2 {
  cursor: pointer;
}



</style>
