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
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1);
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
    // this.sunLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 0.5);
    // this.scene.add(this.sunLightHelper);
  }

  setScene() {
    //this.scene.background = new THREE.Color(0x223c5b);
  }

  resize() {}
  update() {}
}

//   //successThreshold: number;
//   failThreshold: number;
//   currentValue: number;
//   speed: number;
//   poleLength: string;
//   poleLengthVariable: number;
//   //create pole length options with string 2d array of poles from 14'7" to 17'0" and give each value a number starting at 1
//   poleLengthOptions: string[][] = [
//     ["14'7\"", "1"],
//     ["15'1\"", "2"],
//     ["15'7\"", "3"],
//     ["16'1\"", "4"],
//     ["16'5\"", "5"],
//     ["16'8\"", "6"],
//     ["17'0\"", "7"],
//   ];
//poleLengthOptions: string[] = ["14'7\"", "15'1\"", "15'7\"", "16'1\"", "16'5\"", "16'8\"", "17'0\""];
