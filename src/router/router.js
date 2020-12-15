import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'Login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta:{
      login: true
    } 
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import(/* webpackChunkName: "Inventario" */ '../views/Inventario.vue'),
    meta:{
      login: true
    } 
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "Agregar" */ '../views/Agregar.vue'),
    meta:{
      login: true
    } 
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
    meta:{
      login: true
    } 
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = firebase.auth().currentUser;
  let valido = to.matched.some(ruta => ruta.meta.login);

  if (!user && valido) {
    next('/home')
  }else {
    next();
  }
})
export default router
