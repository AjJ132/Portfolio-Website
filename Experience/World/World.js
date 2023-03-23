import Experience from "../Experience";
import * as THREE from "three";
import Room from "./Room";
import Envirnoment from "./Environment";
import Controls from "./Controls";
import Floor from "./Floor";
import SimpleRoom from "../WaterSim/SimpleRoom";
import WaterSim from "../WaterSim/WaterSim";

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
      this.room = new Room();
      this.simpleRoom = new SimpleRoom();
      this.floor = new Floor();
      this.WaterSim = new this.WaterSim();

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
  }
}
