import { Sprite, Texture, InteractionData, InteractionEvent } from "pixi.js";
import HitAreaShapes from "hitarea-shapes";
import { Collider } from "@/model/Collider";
import { Renderable } from "@/model/Renderable";

export class CustomSprite extends Sprite implements Renderable {
  collider: Collider;
  private dragData: InteractionData;
  private dragging: boolean;
  constructor(texturePath: string, outlinePath: object) {
    super(Texture.from(texturePath));
    this.dragData = new InteractionData();
    this.dragging = false;
    const customHitArea = new HitAreaShapes(outlinePath);
    this.collider = new Collider(customHitArea.shapes);
    this.hitArea = customHitArea;
    this.interactive = true;
    this.on("pointerdown", this.onClick);
  }

  onClick() {
    console.log("hello");
  }

  set angle(newAngle) {
    this.collider.applyTransform(this.transform.localTransform);
    this.rotation = newAngle;
  }

  get angle() {
    return this.rotation;
  }

  get size() {
    return this.scale.x;
  }
  set size(newSize: number) {
    this.collider.applyTransform(this.transform.localTransform);
    this.scale.x = this.scale.y = newSize;
  }
  get x() {
    return this.position.x;
  }
  set x(newX: number) {
    this.collider.applyTransform(this.transform.localTransform);
    this.position.x = newX;
  }
  get y() {
    return this.position.y;
  }

  set y(newY: number) {
    this.collider.applyTransform(this.transform.localTransform);
    this.position.y = newY;
  }

  onDragStart(e: InteractionEvent) {
    this.alpha = 0.5;
    this.dragData = e.data;
    const position = this.dragData.getLocalPosition(this);
    this.pivot.set(position.x, position.y);
    this.x = this.dragData.global.x;
    this.y = this.dragData.global.y;
    this.dragging = true;
  }

  onDragEnd() {
    this.alpha = 1.0;
    delete this.dragData;
    this.dragging = false;
  }

  onDragMove() {
    if (this.dragging) {
      this.x = this.dragData.global.x;
      this.y = this.dragData.global.y;
    }
  }
  dragEnable() {
    this.on("mousedown", this.onDragStart);
    this.on("mouseup", this.onDragEnd);
    this.on("mouseupoutside", this.onDragEnd);
    this.on("mousemove", this.onDragMove);
  }

  dragDisable() {
    this.off("mousedown", this.onDragStart);
    this.off("mouseup", this.onDragEnd);
    this.off("mouseupoutside", this.onDragEnd);
    this.off("mousemove", this.onDragMove);
  }
}
