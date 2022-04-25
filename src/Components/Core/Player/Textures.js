import * as PIXI from 'pixi.js';
import { Variables } from '../Game/Variables';
import { Stats } from '../World';
import { Settings } from '../Settings';

export class Textures {
    static generateTextures(color) {
        let low = new PIXI.Graphics();
        low.beginFill(0xffffff); // white color.
        low.drawCircle(0, 0, 256);
        low.endFill();

        Variables.textures.low = Variables.application.renderer.generateTexture(low);

        let cell = new PIXI.Graphics();
        cell.beginTextureFill({
            texture: PIXI.utils.TextureCache[`./images/Player.png`],
            matrix: new PIXI.Matrix().scale(2, 2).translate(-512, -512),
        })
        cell.drawCircle(0, 0, 512);
        cell.endFill();

        Variables.textures.cell = Variables.application.renderer.generateTexture(cell);

        let food = new PIXI.Graphics();
        food.beginFill(0xffffff); // white color.
        food.drawCircle(0, 0, 256);
        food.endFill();

        Variables.textures.food = Variables.application.renderer.generateTexture(food);

        let w = new PIXI.Graphics();
        w.beginFill(0xffffff); // white color.
        w.drawCircle(0, 0, 1024);
        w.endFill();

        Variables.textures.w = Variables.application.renderer.generateTexture(w);

        let virus = new PIXI.Graphics();
        virus.beginTextureFill({
            texture: PIXI.utils.TextureCache[`./images/virus.png`],
            matrix: new PIXI.Matrix().scale(1, 1).translate(-100, -100),
        })
        virus.drawCircle(0, 0, 100);
        virus.endFill();

        Variables.textures.virus = Variables.application.renderer.generateTexture(virus);

        let Playerborder = new PIXI.Graphics();
        Playerborder.beginTextureFill({
            texture: PIXI.utils.TextureCache[`./images/whiteborder.png`],
            matrix: new PIXI.Matrix().scale(2, 2).translate(-1024, -1024),
        })
        Playerborder.drawCircle(0, 0, 1024);
        Playerborder.endFill();

        Variables.textures.Playerborder = Variables.application.renderer.generateTexture(Playerborder);

        let pellet = new PIXI.Graphics();

        pellet.beginFill(0xffffff); // white color.
        pellet.drawCircle(0, 0, 248);
        pellet.endFill();

        Variables.textures.pellet = Variables.application.renderer.generateTexture(pellet);
    }

    static preloadBullShit() {
     //   console.log(`./images/Virus/${localStorage.getItem("virusType")}.png`)
         window.skinsLoader.add(`./images/virus.png`);
         window.skinsLoader.add(`./images/mothercell.png`);
         window.skinsLoader.add(`./images/whiteborder.png`);
         window.skinsLoader.add(`./images/Player.png`);
         window.skinsLoader.add(`./images/SixShapePlayer.png`);
         window.skinsLoader.add(`./images/w.png`);
         window.skinsLoader.add(`./images/food.png`);
         window.skinsLoader.load().onError.add(() => {
         // console.log("error");
         });
         window.skinsLoader.onComplete.add(() => {
             this.generateTextures();
             //Bublex.connect('ultrasplit.bublex.io');
             Stats.drawStats();
         })
     }
}