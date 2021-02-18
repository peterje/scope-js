import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { auth } from "@/store/modules/auth";
import { project } from "@/store/modules/project";

Vue.use(Vuex);
const store: StoreOptions<RootState> = {
  state: {
    message: "hi"
  },
  modules: {
    auth,
    project
  }
};
export default new Vuex.Store<RootState>(store);
