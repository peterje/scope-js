import { Module } from "vuex";
import { RootState } from "@/store/types";
import { ProjectState} from "@/store/modules/project/types";
import { getters } from "@/store/modules/project/getters";
import { mutations } from "@/store/modules/project/mutations";
import { actions } from "@/store/modules/project/actions";
import { GameObject } from "@/model/GameObject";
import ballonPng from "@/assets/sprites/balloon/texture.png";
import balloonHull from "@/assets/sprites/balloon/mask.json";
const initialState = (): ProjectState => {
  const defaultGO = new GameObject(ballonPng, balloonHull, "Balloon")
  return {
    title: "Untitled",
    isPublished: false,
    gameObjects: [defaultGO],
    selectedGameObject: defaultGO
  };
};

const state: ProjectState = initialState();

export const project: Module<ProjectState, RootState> = {
  state,
  getters,
  mutations,
  actions
};
