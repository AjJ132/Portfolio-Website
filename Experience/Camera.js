import Experience from "./Experience";
import * as THREE from "three"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicsCamera();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000);

        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5;
    }
    createOrthographicsCamera(){
        this.frustrumSize = 5;
        this.orthographicCamera = new THREE.OrthographicCamera((-this.sizes.aspect * this.sizes.frustrumSize)/2, 
        (this.sizes.aspect * this.sizes.frustrumSize)/2, this.sizes.frustrumSize / 2, -this.frustrumSize / 2, -100, 100);

        this.scene.add(this.orthographicCamera);
    }

    resize(){
        //update perspective camera resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
        
        //update orthographic camera resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrumSize)/2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrumSize)/2;
        this.orthographicCamera.top = this.sizes.frustrumSize / 2;
        this.orthographicCamera.bottom = -this.frustrumSize / 2;

        this.orthographicCamera.updateProjectionMatrix();
    }
    
    update(){

    }
}