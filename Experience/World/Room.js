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
    this.setLampLight();
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

      //set materials for LEDStrip to blue
      if (child.name === "LEDStrip") {
        child.material = new THREE.MeshBasicMaterial({
          //make color blue
          color: 0x3399ff,
          transparent: true,
          emmisive: 0x3399ff,
        });
      }

      //set materials for lampshade
      if (child.name === "Lampshade") {
        child.material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.98,
        });
      }

      if (child.name === "Window") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set(0xffffff);
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
    });

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

      this.lerpX.target = this.rotationX * this.lerpScaleValue * 2;
      this.lerpY.target = this.rotationY * this.lerpScaleValue;
    });
  }

  setLampLight() {
    this.lampLight = new THREE.PointLight(0xffffff, 0.5);
    //set the position of the light above the lamp in the room
    //this.lampLight.position.set(-0.8, 1, -0.94);
    const LightbulbPos = this.actualRoom.getObjectByName("Lightbulb").position;
    this.lampLight.position.set(LightbulbPos.x, LightbulbPos.y, LightbulbPos.z);

    this.scene.add(this.lampLight);

    //create a helper fot lampLight

    this.actualRoom.add(this.lampLight);
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
