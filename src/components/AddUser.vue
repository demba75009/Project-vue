<template>
  <div class="AddUser">


 <form @submit="trySubmit" >
   
    <h4>Ajouter un produit :</h4>
    <hr class="w-100" />
    <div >
      <label>Nom</label>
      <input v-model ="User.name" type="text"  />
    </div>
    <div >
      <label>Prenom</label>
      <input v-model ="User.prenom" type="text"  />
    </div>

  <div >
      <label>Img</label>
      <input v-model ="User.img" type="text" placeholder = "https//:"  />
    </div>


    <div >
      <label>Publication</label>
      <textarea v-model ="User.publication" placeholder ="ecriver"></textarea>
    </div>
       <button class="btn btn-outline-primary">Add</button>


</form>
  </div>
</template>

<script>

export default {

    name:"AddUser",



    data(){

        return {

 
            User : {

                name : "",

                prenom : "",

                img : "",

                publication : "",

                date : new Date()
            },


            ListUser : []
        }
    },
  



methods:{


trySubmit(e){

    e.preventDefault()

this.ListUser.push(this.User)

this.$http.post("https://dktmusic-afef7.firebaseio.com/User.json",this.User)
.then((res)=>console.log(res.data))
.catch(err =>console.log(err))

this.$router.push('/UserList')


}

},

created(){


  
}

}






</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

textarea{

height:300px;
  width:300px;
}


</style>
