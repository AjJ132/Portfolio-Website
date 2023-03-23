import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";

export default class WaterSim {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.simState = false;
  }
}
