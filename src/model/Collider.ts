import { Matrix, Point, Polygon } from "pixi.js";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const intersects = require("intersects");
export class Collider {
  private path: Point[][] = [];
  private transformedPath: Point[][] = [];
  public transform: Matrix = Matrix.IDENTITY;
  constructor(shapes: Polygon[]) {
    for (const shape of shapes) {
      const shapePath: Point[] = [];
      for (let i = 0; i < shape.points.length - 1; i += 2) {
        shapePath.push(new Point(shape.points[i], shape.points[i + 1]));
      }
      this.path.push(shapePath);
    }
  }

  public applyTransform(other: Matrix) {
    this.transform = other;
    this.updateTransform();
  }

  private static polyToList(path: Point[]) {
    const result: number[] = [];
    for (const point of path) {
      result.push(point.x, point.y);
    }
    return result;
  }
  //todo optimize this. you only need to update transform when isTouching is called
  isTouching(other: Collider) {
    for (const poly1 of this.transformedPath) {
      for (const poly2 of other.transformedPath) {
        if (
          intersects.polygonPolygon(
            Collider.polyToList(poly1),
            Collider.polyToList(poly2)
          )
        ) {
          return true;
        }
      }
    }
    return false;
  }
  updateTransform() {
    this.transformedPath = [];
    for (const polygon of this.path) {
      const transformedPoly = [];
      for (const point of polygon) {
        const transformedPoint = this.transform.apply(point);
        transformedPoly.push(transformedPoint);
      }
      this.transformedPath.push(transformedPoly);
    }
  }
}
