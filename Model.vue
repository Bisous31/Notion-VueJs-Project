<template>
<div>
    <form>
        <label> Ajouter du text </label><br>
        <input type="text" name="name" id="name" ref="input"><br>
        <input type="text" name="" id="">
        <button  @click.prevent="clickbtn()">
            envoie
        </button>
    </form>
</div>    
</template>
<script>
export default { 
methods:{
    clickbtn(){
        const name = this.$refs.input.value
        console.log("We are in!!!" + name);
        fetch("http://localhost:4000/submitFormToNotion",{
            method: "post",
            headers:{
                "Accept": "application/json",
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                name: name
            })
        }).then(res => console.log(res.json()))
        .catch((error)=>{
            console.log(error);
       });
        }         
    }
}
</script>
<style>
    
</style>