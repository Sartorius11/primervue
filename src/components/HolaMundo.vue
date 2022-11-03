<template>
    <div>
        <h1>Mi primer componente!!</h1>
        <h2>Mi nombre es {{nombre}}</h2>
        <h3>Tengo {{anyos}}</h3>
        <h3>este es mi array {{array}}</h3>
    </div>
</template>

<script>
    //SIEMPRE DEBEMOS EXPORTAR EL NOMBRE DL COMPONENTE EN EL SCRIPT
    
    
    export default{
        
        name: "HolaMundo",
        data(){
            //AQUI DENTRO DEBEMOS DEVOLVER LAS VARIABLES A UTILIZAR
            //EN EL COMPONENT
            return{
                nombre: "Sarto",
                anyos: 14,
                miArray: []
            }
        }
    }

    

</script>

//los estilos CSS son Opcionales
<style scoped>
    h1{color: fuchsia;}
    @import './../assets/css/estilosvue.css';
</style>