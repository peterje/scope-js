import { GameObject } from "@/model/GameObject";

export interface ProjectState {
  title: string;
  isPublished: boolean;
  gameObjects: GameObject[];
  selectedGameObject?: GameObject;
}
