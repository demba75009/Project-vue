import Vue from "vue";
import App from "./App.vue";
import * as axios from "axios";
import router from "./router";

Vue.config.userionTip = false;

Vue.prototype.$http = axios;

export const UserBus = new Vue({
  data: {
    User: [],
    Like: [],
  },

  methods: {
    LikePost(User) {
        this.Like = [...this.Like, User];

        console.log(this.Like);
        this.$http
          .put(`https://dktmusic-afef7.firebaseio.com/Like.json/`, this.Like)
          .then((res) => {
            console.log(res);
          });
      
      this.$emit("update:Like", this.Like);
    },

    DisLike(Like) {
      this.Like = this.Like.findIndex((U) => U.id === Like.id);

      this.$http
        .put(`https://dktmusic-afef7.firebaseio.com/Like.json/`, {
          headers: { key: this.index },
        })
        .then((res) =>
        
        {console.log(res)
        
          this.$emit("update:Like", this.Like);

        }
        
        )


        .catch((err) => console.log(err));
    },


    deleteUser(User) {
      this.User = this.User.findIndex((U) => U.id === User.id);
      this.$emit("update:User", this.User);

      this.$http
        .put(`https://dktmusic-afef7.firebaseio.com/User.json/`, {
          headers: { key: this.index },
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
