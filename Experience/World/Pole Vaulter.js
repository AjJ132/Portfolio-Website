import Experience from "../Experience";
import * as THREE from "three";

export default class PoleVaulter {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.clock = new THREE.Clock();

    this.poleVaulter = this.experience.resources.items.poleVaulter;
    this.actualVaulter = this.poleVaulter.scene;
    console.log(this.poleVaulter);
    this.setPV();
  }

  setPV() {
    this.actualVaulter.scale.set(1, 1, 1);
    this.actualVaulter.position.set(0, 0, 0);

    this.scene.add(this.actualVaulter);

    this.animations = this.poleVaulter.animations;
    console.log("Animations: " + this.animations);
    this.mixer = new THREE.AnimationMixer(this.poleVaulter.scene);

    console.log(this.animations.length);
    if (this.animations.length > 0) {
      console.log("Animations found");
      const running = this.mixer.clipAction(this.animations[0]);
      running.play();
      const poleACtion = this.mixer.clipAction(this.animations[1]);
      poleACtion.play();
    } else {
      console.log("No animations found");
    }
  }

  animate() {
    this.mixer.update(this.clock.getDelta());

    requestAnimationFrame(this.animate);
  }
  resize() {}

  update() {
    this.animate();
  }
}
