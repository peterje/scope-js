import * as PIXI from "pixi.js";
import { TextStyle } from "pixi.js";
import { Renderable } from "@/model/Renderable";
export class Text extends PIXI.Text implements Renderable {
  text = "";
  constructor(text: string, style: TextStyle) {
    super(text, style);
  }

  set size(newSize: number) {
    this.style.fontSize = newSize;
  }

  get size() {
    return this.style.fontSize;
  }
  set x(newX) {
    this.position.set(newX, this.position.y);
  }
  get x() {
    return this.position.x;
  }
  set y(newY) {
    this.position.set(this.position.x, newY);
  }
  get y() {
    return this.position.y;
  }
}
