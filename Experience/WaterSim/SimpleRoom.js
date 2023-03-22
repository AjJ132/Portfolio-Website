import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources = this.experience.resources;

    this.simpleRoom = this.resources.items.simpleRoom;
    this.actualRoom = this.room.scene;

    this.scaleValue = 0.5;

    this.setModel();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
    });

    this.actualRoom.scale.set(
      this.scaleValue,
      this.scaleValue,
      this.scaleValue
    );

    this.scene.add(this.actualRoom);
  }

  resize() {}

  update() {}
}
