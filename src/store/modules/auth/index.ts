import { Module } from "vuex";
import { RootState } from "@/store/types";
import { AuthState } from "@/store/modules/auth/types";
import { getters } from "@/store/modules/auth/getters";
import { mutations } from "@/store/modules/auth/mutations";
import { actions } from "@/store/modules/auth/actions";
import firebase from "firebase/app";
import "firebase/auth";

const state: AuthState = {
  user: undefined,
  error: undefined
};



export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  mutations,
  actions
};
