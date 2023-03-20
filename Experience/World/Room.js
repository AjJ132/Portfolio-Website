import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources = this.experience.resources;

    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.scaleValue = 0.5;

    this.lerpX = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
    this.lerpY = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setModel();
    this.onMouseMove();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }

      // if (child.name === "MonitorScreen") {
      //   console.log("found monitor screen");
      //   child.material = new THREE.MeshBasicMaterial({
      //     map: this.resources.items.screen,
      //   });
      // }

      if (child.name === "Window") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0xffffff);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
    });
    //this.actualRoom.rotation.y = -Math.PI / 2;

    this.actualRoom.scale.set(
      this.scaleValue,
      this.scaleValue,
      this.scaleValue
    );
    this.scene.add(this.actualRoom);
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotationX =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;

      this.rotationY =
        ((e.clientY - window.innerHeight / 2) * 2) / window.innerHeight;

      this.lerpScaleValue = 0.05;

      this.lerpX.target = this.rotationX * this.lerpScaleValue;
      this.lerpY.target = this.rotationY * this.lerpScaleValue;
    });
  }

  resize() {}

  update() {
    //lerp the progress
    this.lerpX.current = GSAP.utils.interpolate(
      this.lerpX.current,
      this.lerpX.target,
      this.lerpX.ease
    );
    this.lerpY.current = GSAP.utils.interpolate(
      this.lerpY.current,
      this.lerpY.target,
      this.lerpY.ease
    );

    this.actualRoom.rotation.y = this.lerpX.current;
    this.actualRoom.rotation.x = this.lerpY.current;
  }
}
