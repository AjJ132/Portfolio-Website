import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";

export default class WaterSim {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.sim = this.experience.resources.items.WaterSim.scene;
    this.scene.add(this.sim);

    const mixer = new THREE.AnimationMixer(this.sim);

    for (const clip of this.sim.animations) {
      mixer.clipAction(clip).play();
    }
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = THREE.Clock.getDelta();
    mixer.update(delta);

    this.experience.renderer.renderer(
      this.scene,
      this.experience.camera.orthographicCamera
    );
  }

  update() {
    this.animate();
  }
}
