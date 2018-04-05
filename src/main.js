// import InputController from 'core/InputController';
import { createCanvas } from "util/canvas";

export function start() {
    console.log('start');
    
    const ctx = createCanvas(window.innerWidth, window.innerHeight);
    document.body.appendChild(ctx.canvas);
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}
