import { MutationTree } from "vuex";
import { AuthState } from "@/store/modules/auth/types";
import firebase from "firebase/app";

export enum AuthMutations {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR"
}

export const mutations: MutationTree<AuthState> = {
  [AuthMutations.SET_USER](state, payload: firebase.User) {
    state.user = payload;
  },
  [AuthMutations.SET_ERROR](state, payload) {
    state.error = payload;
  }
};
