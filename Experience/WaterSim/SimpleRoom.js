import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";

export default class SimpleRoom {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.simpleRoom = this.resources.items.SimpleRoom;

    this.actualRoom = this.simpleRoom.scene;

    this.scaleValue = 0.5;

    this.setModel();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
    });

    this.actualRoom.scale.set(
      this.scaleValue,
      this.scaleValue,
      this.scaleValue
    );

    //set the intial position of the simpleroom to be out to the left of the screen
    this.actualRoom.position.set(-10, 0, 0);

    this.scene.add(this.actualRoom);

    console.log("SimpleRoom set");
  }

  resize() {}

  update() {}
}
