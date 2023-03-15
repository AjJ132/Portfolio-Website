import { EventEmitter } from "events";

export default class Time extends EventEmitter{
    constructor(){
        super();
        this.startTime = Date.now();
        this.currentTime = this.startTime;
        this.elapsedTime = 0;
        this.deltaTime = 16;

        this.update();
    }

    update(){
        const curTime = Date.now()
        this.deltaTime = curTime - this.currentTime;
        this.currentTime = curTime;
        this.elapsedTime = this.currentTime - this.startTime;


        this.emit("update");
        window.requestAnimationFrame(() => this.update());


    }
}