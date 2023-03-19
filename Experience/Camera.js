import Experience from "./Experience";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicsCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    );

    this.scene.add(this.perspectiveCamera);
    this.perspectiveCamera.position.z = 5;
  }
  createOrthographicsCamera() {
    this.frustrumSize = 5;
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrumSize) / 2,
      (this.sizes.aspect * this.sizes.frustrumSize) / 2,
      this.sizes.frustrumSize / 2,
      -this.frustrumSize / 2,
      -100,
      100
    );

    const size = 20;
    const divisions = 20;

    const gridHelper = new THREE.GridHelper(size, divisions);
    this.scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(10);
    this.scene.add(axesHelper);

    this.scene.add(this.orthographicCamera);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
  }

  resize() {
    //update perspective camera resize
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    //update orthographic camera resize
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrumSize) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrumSize) / 2;
    this.orthographicCamera.top = this.sizes.frustrumSize / 2;
    this.orthographicCamera.bottom = -this.frustrumSize / 2;

    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
