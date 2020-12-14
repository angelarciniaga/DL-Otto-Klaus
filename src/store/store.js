import Vue from 'vue';
import Vuex from 'vuex';
import {db} from '../main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataJuegos: [],
    user: {}
  },
  getters:{
    enviarUser(state){
      return state.user;
    },
    enviarJuegos(state){
      return state.dataJuegos;
    }
  },
  mutations: {
    addUsuario(state, userData){
      state.user = userData;
    },
    mutarjuego(state, arreglo) {
      state.dataJuegos = arreglo
    }
  },
  actions: {
    traerDatos({commit}){
      db.collection('jueguetes').onSnapshot(resp => {
        let arreglo = [];
        resp.forEach(element => {
          arreglo.push({
            id: element.id,
            nombre: element.data().nombre,
            stock: element.data().stock,
            precio: element.data().precio,
          })
        });
        commit('mutarjuego', arreglo);
        console.log(arreglo);
      })
    },
    agregarJuego(context, data){
      db.collection('jueguetes').add({
        codigo: data.codigo,
        nombre: data.nombre,
        stock: data.stock,
        precio: data.precio
      })
    },

    agregarUser({commit}, user){
      commit('addUsuario', user);
    },
    datos({commit}){
      commit('traerDatos')
    },
    addJuego({commit},data){
      commit('agregarJuego', data);
    }
  },
})
