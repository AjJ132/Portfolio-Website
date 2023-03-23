import Experience from "../Experience";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GSAP from "gsap";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    this.room = this.experience.world.room.actualRoom;
    this.simpleRoom = this.experience.world.simpleRoom.actualRoom;
    GSAP.registerPlugin(ScrollTrigger);

    this.setPath();
  }

  setPath() {
    //move the main room to the right of the screen by 10 when user scrolls to About section
    this.timeline = GSAP.timeline();
    this.timeline.to(this.room.position, {
      x: 10,
      scrollTrigger: {
        trigger: ".first-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    //Same thing but for simple room
    this.timeline.to(this.simpleRoom.position, {
      x: 0,
      scrollTrigger: {
        trigger: ".first-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: () => {},
      },
    });

    console.log("Controls set");
  }
  resize() {}

  update() {}
}
