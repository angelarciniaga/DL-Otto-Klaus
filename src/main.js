import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import firebase from 'firebase';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { firebaseConfig } from "./config/firebaseConfig";
import ElementUI from 'element-ui';
import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

Vue.use(ElementUI);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
