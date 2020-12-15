<template>
    <div>
        <div v-if="this.$route.params.id">
            <b-form class="container mt-5" @submit.prevent="editando">
    <!-- Codigo -->
            <b-form-group 
            id="input-group-1" 
            label="Codigo" 
            label-for="input-1"
            >
                <b-form-input 
                id="input-1" 
                v-model="Juguetes.codigo" 
                placeholder="Codigo Juguete"
                ></b-form-input>
            </b-form-group>
    <!-- Nombre -->
            <b-form-group 
            id="input-group-2" 
            label="Nombre Juguete" 
            label-for="input-2"
            >
                <b-form-input 
                id="input-2" 
                v-model="Juguetes.nombre" 
                placeholder="Nombre Juguete"
                ></b-form-input>
            </b-form-group>
    <!-- Stock -->
            <b-form-group 
            id="input-group-3" 
            label="Stock" 
            label-for="input-3"
            >
                <b-form-input 
                id="input-3" 
                v-model="Juguetes.stock" 
                required 
                placeholder="Stock" 
                type="number"
                ></b-form-input>
            </b-form-group>
    <!-- Precio -->
            <b-form-group 
            id="input-group-4" 
            label="Precio" 
            label-for="input-4"
            >
                <b-form-input 
                id="input-4" 
                v-model="Juguetes.precio" 
                required 
                placeholder="Precio" 
                type="number"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mx-2">Editar</b-button>
            <b-button class="mx-2" @click="$router.push('/inventario')">Volver</b-button>

            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AgregarJuguete",
    data() {
        return {
            Juguetes: {
                codigo: '',
                nombre: '',
                stock: 0,
                precio: 0,
            }
        }
    },
    created() {
        let Juguetes = {};
        Juguetes = this.$store.getters.enviarJuegos.find(resp => resp.id === this.$route.params.id)
        if (Juguetes){
            this.Juguetes.codigo = Juguetes.codigo;
            this.Juguetes.nombre = Juguetes.nombre;
            this.Juguetes.stock = Juguetes.stock;
            this.Juguetes.precio = Juguetes.precio;
            this.Juguetes.id = Juguetes.id;
        }else {
            this.$message('Este juguete no existe');
            setTimeout(()=>{
                this.$router.push('/inventario');
            },1000);
        }
    },
    methods: {
        editando() {
            this.$confirm("¿Estás seguro que deseas editar estejuguete?","Cuidado", {
                confirmButtonText: "OK",
                cancelButtonText: "Cancelar",
                type: "warning",
                center: true,
            }).then(() => {
            this.$message({
                type: "success",
                message: "Juguete Editado.",
            });
            this.$store.dispatch("listaActual", this.Juguetes);
            }).catch(() => {
                console.log("Se produjo un error al editar el juguete");
            });
        }
    },
    
}
</script>

<style>

</style>