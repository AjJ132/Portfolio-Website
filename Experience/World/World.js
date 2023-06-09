import Experience from "../Experience";
import * as THREE from "three";
import Room from "./Room";
import Envirnoment from "./Environment";
import Controls from "./Controls";
import Floor from "./Floor";
import PoleVaulter from "./Pole Vaulter";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.environment = new Envirnoment();
      //this.room = new Room();

      this.floor = new Floor();
      this.poleVaulter = new PoleVaulter();

      this.controls = new Controls();

      console.log("Scene set");
    });
  }

  resize() {}

  update() {
    if (this.controls) {
      this.controls.update();
    }
    if (this.room) {
      this.room.update();
    }

    if (this.poleVaulter) {
      this.poleVaulter.update();
    }
  }
}
