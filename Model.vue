<template>
<div>
    <form>
        <label> Le nom du demandeur ou du Service à intervenir</label><br>
        <input type="text" name="service" id="service" ref="service"><br>
        <label> Le nom de l'intervenant </label><br>
        <input type="text" name="intervenant" id="intervenant" ref="intervenant"><br>
        <label> La date de l'intervention? </label><br>
        <input type="date" name="date" id="date" ref="date"><br>
        <label> Identification de la panne </label><br>
        <input type="text" name="panne" id="panne" ref="panne"><br>
        <label> Les observations </label><br>
        <textarea name="observation" id="observation" cols="15" rows="4"></textarea><br>
        <button  @click.prevent="clickbtn()">
            Envoyer
        </button>
    </form>
</div>    
</template>
<script>
export default { 
methods:{
    clickbtn(){
        const date = this.$refs.date.value;
        const service = this.$refs.service.value;
        const intervenant = this.$refs.intervenant.value;
        const panne = this.$refs.panne.value;
        const obs = this.$refs.obs.value;
        
        console.log("We are in!!!");
        fetch("http://localhost:4000/submitFormToNotion",{
            method: "post",
            headers:{
                "Accept": "application/json",
                "Content-type":"application/json"
            },
            body: JSON.stringify({
               date : date,
               service: service,
               intervenant: intervenant,
               panne: panne,
               obs: obs
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
