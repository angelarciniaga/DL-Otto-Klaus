<template>
    <div>
        <b-button v-b-modal.modal-prevent-closing>Agregar Jueguete</b-button>

        <div class="mt-3">
        Lista de Jueguetes:
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">Stock</th>
                <th scope="col">Precio</th>
                <th scope="col">Editar o Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in traerJuego" :key="index">
                <th scope="row">{{item.codigo}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.stok}}</td>
                <td>{{item.precio}}</td>
                </tr>
            </tbody>
            </table>
        <!-- <div v-if="submittedNames.length === 0">--</div>
        <ul v-else class="mb-0 pl-3">
            <li v-for="name in submittedNames" :key="name">{{ name }}</li>
        </ul> -->
        </div>

        <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Ingrese nuevo producto"
        @ok="registrar"
        >
        <form ref="form" @submit.prevent="registrar">
            <b-form-group
            id="input-group-1"
            label="Codigo"
            label-for="input-1"
            >
            <b-form-input
                id="input-1"
                v-model="codigo"
                type= "text"
                required
                placeholder="Ingresa Código"
            ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-2"
            label="Nombre"
            label-for="input-2"
            >
            <b-form-input
                id="input-2"
                v-model="nombre"
                type= "text"
                required
                placeholder="Ingresa Nombre"
            ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-3"
            label="Stock"
            label-for="input-3"
            >
            <b-form-input
                id="input-3"
                v-model="stock"
                type= "number"
                required
                placeholder="Ingresa Stock"
            ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-4"
            label="Precio"
            label-for="input-4"
            >
            <b-form-input
                id="input-4"
                v-model="precio"
                type= "number"
                required
                placeholder="Ingresa precio"
            ></b-form-input>
            </b-form-group>
        </form>
        </b-modal>
    </div>
</template>

    <script>
    export default {
        data() {
            return {
                jueguetes: '',
                codigo: '',
                nombre: '',
                stock: null,
                precio: null,
                nameState: null,
                submittedNames: []
            }
        },
        computed: {
            traerJuego() {
                return this.$store.getters.enviarJuegos;
            }
        },
        methods: {
            registrar(){
                console.log('dentro de registro');
                if (this.codio && this.nombre && this.stock && this.precio) {
                    console.log('Enviando');
                    this.$store.dispatch('addJuego', this.codigo, this.nombre, this.stock, this.precio);
                } else {
                    console.log('No se puede')
                }
            },
        },
    }
</script>