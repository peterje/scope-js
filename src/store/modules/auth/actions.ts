import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { AuthState } from "@/store/modules/auth/types";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthMutations } from "@/store/modules/auth/mutations";
export enum AuthActions {
  SIGN_UP_EMAIL = "SIGN_UP_EMAIL",
  UPDATE_USER = "UPDATE_USER",
  SIGN_IN_OAUTH = "SIGN_IN_OATH",
  SIGN_IN_EMAIL = "SIGN_IN_EMAIL",
  SET_ERROR_MSG = "SET_ERROR_MSG"
}
export const actions: ActionTree<AuthState, RootState> = {
  [AuthActions.UPDATE_USER]({ commit }, user) {
    commit(AuthMutations.SET_USER, user);
  },
  [AuthActions.SET_ERROR_MSG]({ commit }, payload) {
    commit(AuthMutations.SET_ERROR, "");
  },
  [AuthActions.SIGN_UP_EMAIL]({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        commit(AuthMutations.SET_ERROR, "");
      })
      .catch(error => {
        commit(AuthMutations.SET_ERROR, error.message);
      });
  },
  [AuthActions.SIGN_IN_OAUTH](
    { commit },
    payload: firebase.auth.OAuthProvider
  ) {
    firebase
      .auth()
      .signInWithPopup(payload)
      .then(response => {
        commit(AuthMutations.SET_ERROR, "");
      })
      .catch(error => {
        if (error.code === "auth/account-exists-with-different-credential") {
          commit(AuthMutations.SET_ERROR, error.message);
        }
      });
  },
  [AuthActions.SIGN_IN_EMAIL]({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(userCredential => {
        commit(AuthMutations.SET_ERROR, "");
      })
      .catch(error => {
        commit(AuthMutations.SET_ERROR, error.message);
      });
  }
};
