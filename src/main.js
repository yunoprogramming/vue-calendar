import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({ 
  apiKey: "AIzaSyA8KDBpRH6NJZTWDpd_aDHVhefPzQPkqDY",
  authDomain: "vue-calendar-19827.firebaseapp.com",
  projectId: "vue-calendar-19827",
  storageBucket: "vue-calendar-19827.appspot.com",
  messagingSenderId: "229483920541",
  appId: "1:229483920541:web:a63a64a2899ca9d167a874"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
