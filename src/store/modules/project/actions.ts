import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { ProjectState } from "@/store/modules/project/types";
import { ProjectMutations } from "@/store/modules/project/mutations";
import { GameObject } from "@/model/GameObject";
export enum ProjectActions {
  SET_TITLE = "SET_TITLE",
  SET_PUBLISHED = "SET_PUBLISHED",
  ADD_GAME_OBJECT = "ADD_GAME_OBJECT",
  DEL_GAME_OBJECT = "DEL_GAME_OBJECT",
  SELECT_GAME_OBJECT = "SELECT_GAME_OBJECT"
}

export const actions: ActionTree<ProjectState, RootState> = {
  [ProjectActions.SET_TITLE]({ commit }, title: string): void {
    commit(ProjectMutations.SET_TITLE, title);
  },
  [ProjectActions.SET_PUBLISHED]({ commit }, gameObject: GameObject): void {
    commit(ProjectMutations.ADD_GAME_OBJECT, gameObject);
  },
  [ProjectActions.ADD_GAME_OBJECT]({ commit }, gameObject: GameObject): void {
    commit(ProjectMutations.ADD_GAME_OBJECT, gameObject);
  },
  [ProjectActions.DEL_GAME_OBJECT]({ commit }, gameObject: GameObject): void {
    commit(ProjectMutations.DEL_GAME_OBJECT, gameObject);
  },
  [ProjectActions.SELECT_GAME_OBJECT](
    { commit },
    gameObject: GameObject
  ): void {
    commit(ProjectMutations.SELECT_GAME_OBJECT, gameObject);
  }
};
