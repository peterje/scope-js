import { CustomSprite } from "@/model/CustomSprite";

export class GameObject {
  static defaultScript = "function start(){\n\n}\n\nfunction update(){\n\n}";
  sprite: CustomSprite;
  name: string;
  imgPath: string;
  script: string;
  constructor(imagePath: string, hull: object, name: string) {
    this.sprite = new CustomSprite(imagePath, hull);
    this.imgPath = imagePath;
    this.script = GameObject.defaultScript;
    this.name = name;
    this.sprite.interactive = true;
    this.sprite.on("mousedown", function() {
      console.log("clicked");
    });
  }
}
