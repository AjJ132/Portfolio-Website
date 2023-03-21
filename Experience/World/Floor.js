import Experience from "../Experience";
import * as THREE from "three";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setFloor();
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(100, 100);
    this.material = new THREE.MeshStandardMaterial({ color: 0x282728 });
    this.plane = new THREE.Mesh(this.geometry, this.material);

    this.plane.rotation.x = -Math.PI / 2;
    this.plane.position.y = -0.3;

    //set shadows on floor
    this.plane.receiveShadow = true;

    this.scene.add(this.plane);
  }
  resize() {}

  update() {}
}
