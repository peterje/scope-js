import { MutationTree } from "vuex";
import { ProjectState } from "@/store/modules/project/types";
import { GameObject } from "@/model/GameObject";
export enum ProjectMutations {
  SET_TITLE = "SET_TITLE",
  SET_PUBLISHED = "SET_PUBLISHED",
  ADD_GAME_OBJECT = "ADD_GAME_OBJECT",
  DEL_GAME_OBJECT = "DEL_GAME_OBJECT",
  SELECT_GAME_OBJECT = "SELECT_GAME_OBJECT",
  LOAD_PROJECT = "LOAD_PROJECT"
}

export const mutations: MutationTree<ProjectState> = {
  [ProjectMutations.SET_TITLE](state, payload: string) {
    state.title = payload;
  },
  [ProjectMutations.ADD_GAME_OBJECT](state, payload: GameObject) {
    state.gameObjects.push(payload);
  },
  [ProjectMutations.DEL_GAME_OBJECT](state, payload: GameObject) {
    state.gameObjects = state.gameObjects.filter(item => item !== payload);
    if (state.selectedGameObject === payload) {
      state.selectedGameObject = undefined;
    }
  },
  [ProjectMutations.SELECT_GAME_OBJECT](state, payload: GameObject) {
    state.selectedGameObject = payload;
  },
  [ProjectMutations.LOAD_PROJECT](state, payload: ProjectState) {
    state = payload;
  }
};
