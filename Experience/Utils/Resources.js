import EventEmitter from "events";
import Experience from "../Experience"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import * as THREE from "three"


export default class Resources extends EventEmitter{
    constructor(Assets){
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = Assets;

        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders(){
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

    }

    startLoading(){
        for(const asset of this.assets){
            if(asset.type ==="glbModel"){
                this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
                })
            }
            else if(asset.type === "videoTexture"){
                this.video = {}
                this.videoTexture = {}

                this.video[asset.name] = document.createElement("video");
                this.video[asset.name].src = asset.path;
                this.video[asset.name].playsInLine = true;
                this.video[asset.name].muted = true;
                this.video[asset.name].autoplay = true; 
                this.video[asset.name].loop = true;
                this.video[asset.name].play();

                this.videoTexture[asset.name] =  new THREE.VideoTexture(this.video[asset.name]);

                this.videoTexture[asset.name].flipY = true;
                this.videoTexture[asset.name].minFilter = THREE.NearestFilter; 
                this.videoTexture[asset.name].magFilter = THREE.NearestFilter
                this.videoTexture[asset.name].generateMipMaps = false;
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding

            }
        }
    }

    singleAssetLoaded(asset, file){
        this.items[asset.name] = file;
        this.loaded++;

        console.log("Asset is loading: " + asset.name);

        if(this.loaded === this.queue){
            console.log("All assets loaded");
            this.emit("ready");
            
        }

    }
}