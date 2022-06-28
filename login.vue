<template>
     <div class="card">
    <div class="card-body">
    <form @submit.prevent="Submit">
        <h1>LOGIN</h1>
        <div class="form-icon">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </span>
            </div>
        <br>
        <!-- <label class="col-3" for="">UserName</label>
        <input class="col-5" type="text" v-model="form.email" required> -->
       <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  </span>
  <input type="text" class="form-control" placeholder="Username" v-model="form.email" aria-label="Username" aria-describedby="basic-addon1">
</div>
        <!-- <label class="col-3" for="">Password</label>
        <input class="col-5" type="password" v-model="form.password" required> -->
 <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        </svg>
    </span>
  <input type="password" class="form-control" placeholder="Password" v-model="form.password" required="required" aria-label="Username" aria-describedby="basic-addon1">
</div>
        <button class="btn btn-primary mt-2" type="submit">Login</button>
    </form>
    </div>
  </div>  
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
            data(){
        return{
            form:{
                email: "",
                password: ""
            },
            admin:{
                name: "admin",
                pass: "admin"
            },
            login: false
        }
    },
    methods:{
        Submit(){
            //Vérification
            if(this.form.email === this.admin.name && this.form.password === this.admin.pass){
                this.$store.commit('login',this.form.email)
                this.form.email = '',
                this.form.password = '',
                this.login == true
            }else(alert("username ou password invalide"))
        }
    }
}
</script>
<style>
body{
    background-color: #dee9ff;
}
div .card{
    background-color: #eceef3d5;
    width:300px;
    margin: 100% auto;
    margin-top: 125px;
}
</style>
