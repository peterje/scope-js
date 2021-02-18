import { GetterTree } from "vuex";
import { AuthState } from "@/store/modules/auth/types";
import { RootState } from "@/store/types";

export const getters: GetterTree<AuthState, RootState> = {
  isLoggedIn(state): boolean {
    return state.user != undefined;
  },
  getUser(state) {
    return state.user;
  },
  getError(state) {
    if (state.error) {
      return state.error;
    }
    return "";
  }
};
