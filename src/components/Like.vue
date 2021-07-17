<template>
  <div>
    <h2>Post Liker :</h2>

    <hr class="bg-dark" />

    <div class="Like  text-center card" v-for="L in Like" :key="L.id">
      <img :src="L.img" />

      <h2 @click="LikeDetail()">
        {{ L.name }}
      </h2>

      <h4>
        {{ L.prenom }}
      </h4>

      <section>{{ L.publication }} ...</section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Like",
  data() {
    return {
      Like: [],
    };
  },

  created() {
    this.$http
      .get("https://dktmusic-afef7.firebaseio.com/Like.json")
      .then((res) => {
        console.log(res.data);

        this.Like = res.data;

        console.log(this.Like);
      })

      .catch((err) => console.log(err));
  },

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 50%;
  width: 50%;
}

.Like {
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
