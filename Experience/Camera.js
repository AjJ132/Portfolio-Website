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

    //set the position of the perspective camera facing down on the scene
    this.perspectiveCamera.position.y = 20;
    this.perspectiveCamera.rotation.x = Math.PI / 2;
    this.perspectiveCamera.rotation.z = 45;
    this.perspectiveCamera.position.z = -1;
    this.perspectiveCamera.position.x = -1;

    // this.perspectiveCamera.position.x = -19.4;
    // this.perspectiveCamera.position.y = 12.8;
  }

  createOrthographicsCamera() {
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -50,
      50
    );

    //set the position of the orthographic camera facing the scene
    this.orthographicCamera.position.y = 5.7;
    this.orthographicCamera.position.z = 10;
    this.orthographicCamera.rotation.x = -Math.PI / 7;

    this.scene.add(this.orthographicCamera);

    //create a helper for the orthographic camera
    // this.helper = new THREE.CameraHelper(this.orthographicCamera);
    // this.scene.add(this.helper);

    const size = 20;
    const divisions = 20;

    const gridHelper = new THREE.GridHelper(size, divisions);
    this.scene.add(gridHelper);
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

    //update the helper of the orthographic camera
    // this.helper.matrixWorldNeedsUpdate = true;
    // this.helper.update();
    // this.helper.position.copy(this.orthographicCamera.position);
    // this.helper.rotation.copy(this.orthographicCamera.rotation);

    //display the position of the camera
    //console.log(this.orthographicCamera.position);
  }
}
