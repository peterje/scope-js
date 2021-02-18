import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import VueCompositionAPI from "@vue/composition-api"
import { AuthActions } from "@/store/modules/auth/actions";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCjjZWTgTRz0vrDWsVI7y-AQzqdEo8oHSI",
  authDomain: "scope-js.firebaseapp.com",
  projectId: "scope-js",
  storageBucket: "scope-js.appspot.com",
  messagingSenderId: "468164530237",
  appId: "1:468164530237:web:6caa36b534ff0b10fa1a54",
  measurementId: "G-SFB83850LC"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch(AuthActions.UPDATE_USER, user);
});
Vue.use(VueCompositionAPI);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
