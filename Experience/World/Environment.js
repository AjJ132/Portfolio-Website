import Experience from "../Experience";
import * as THREE from "three"

export default class Envirnoment{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        
        this.setSunlight();
    }

    setSunlight(){
        this.sunLight = new THREE.DirectionalLight(0xffffff, 3);
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        
    }
    
    resize(){
    }
    
    update(){
    }
}