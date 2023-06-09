import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Time from "./Utils/Time";
import World from "./World/World";
import Resources from "./Utils/Resources";
import assets from "./Utils/Assets";
import GameFunction from "./PoleVaultGame/GameFunction";

export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.resources = new Resources(assets);
    this.world = new World();

    //create game function
    this.GameFunction = new GameFunction();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
  }
}
