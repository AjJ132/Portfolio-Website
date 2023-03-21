import Experience from "../Experience";
import * as THREE from "three";

export default class Envirnoment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setSunlight();
    this.setScene();
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight(0xffffff, 0.2);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.normalBias = 0.05;
    // const shadowHelper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    // this.scene.add(shadowHelper);
    this.sunLight.position.set(0, 10, 7);
    this.scene.add(this.sunLight);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this.scene.add(this.ambientLight);

    //create a helper fot sunLight
    this.sunLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.5);
    this.scene.add(this.sunLightHelper);
  }

  setScene() {
    this.scene.background = new THREE.Color(0x282728);
  }

  resize() {}
  update() {}
}
