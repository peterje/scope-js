import { GetterTree } from "vuex";
import { ProjectState } from "@/store/modules/project/types";
import { RootState } from "@/store/types";
import { GameObject } from "@/model/GameObject";

export enum ProjectGetters {
  GET_TITLE = "GET_TITLE",
  GET_ACTIVE_GAME_OBJECT = "GET_ACTIVE_GAME_OBJECT",
  GET_GAME_OBJECTS = "GET_GAME_OBJECTS"
}

export const getters: GetterTree<ProjectState, RootState> = {
  [ProjectGetters.GET_TITLE](state): string {
    return state.title;
  },
  [ProjectGetters.GET_GAME_OBJECTS](state): GameObject[] {
    return state.gameObjects;
  },
  [ProjectGetters.GET_ACTIVE_GAME_OBJECT](state): GameObject | undefined{
    return state.selectedGameObject;
  }
};
