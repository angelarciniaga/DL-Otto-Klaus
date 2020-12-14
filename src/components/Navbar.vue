<template>
    <div>
    <b-navbar class="mb-5" type="dark" variant="info">
        <b-navbar-brand><router-link tag="div" :to="{name: 'Home'}">Otto Klaus</router-link></b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-dropdown-item><router-link tag="div" :to="{name: 'Login'}">Login</router-link></b-dropdown-item>
            <b-dropdown-item @click="salida">Cerrar Sesion</b-dropdown-item>
        </b-navbar-nav>
    </b-navbar>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    methods: {
        salida() {
            if(this.$store.getters.enviarUser){
                firebase.auth().signOut().then(() => {
                    this.$router.push('/login').catch(() =>{});
                }).catch((error) => {
                    console.error(error);
                })
            }
        }
    },
}
</script>

<style>

</style>