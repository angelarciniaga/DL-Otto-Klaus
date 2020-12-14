import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

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
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let userUid = store.getters.enviarUser.uid;
  let valido = to.matched.some(ruta => ruta.meta.login);

  if (!userUid && valido) {
    next('/login')
  }else {
    next();
  }
})
export default router
