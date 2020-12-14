<template>
  <div class="container">
    <b-form @submit.prevent="iniciarSesion">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Ingresa email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Introduzca contraseña"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Ingresar</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase'

  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
      }
    },
    methods: {
      iniciarSesion() {
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
          .then(() => {
                firebase.auth().currentUser.sendEmailVerification().then(() => {
                    console.log("Enviado con Exito...");
                }).catch((error) => {
                    console.error(error);
                });
                this.$router.push('/home').catch(()=>{});
        });
      }
    }
  }
</script>