import * as PIXI from 'pixi.js';
import { Border } from './';
import { Settings } from '../Settings';
import { Variables } from '../Game/Variables';

export class drawMap {
    constructor(game) {
        this.game = game;
        this.container = new PIXI.Container();
        this.borders= new PIXI.Graphics();
        this.showborders = Settings.Options.showBorder;
        this.width = Border.draw.width;
        this.height = Border.draw.height;
        this.top = Border.draw.top;
        this.bottom = Border.draw.bottom;
        this.bg = new PIXI.TilingSprite(PIXI.Texture.from('/images/gridl.png'), this.width, this.height);
        this.bg.anchor.set(0.5);

        this.borderColors = localStorage.getItem('bordersColor');
        this.borders.lineStyle(80, `0x${this.borderColors}`);
	    this.borders.drawRect(this.top, -this.bottom, this.width, this.height);
        this.borders.endFill();

        this.initializate();
    }

    initializate() {
        if (Border.draw.centerX !== 0 || Border.draw.centerY !== 0) return;
        this.container.addChild(this.bg)
        if(this.showborders) {
            this.container.addChild(this.borders)
        }
        Variables.bgContainer.addChild(this.container);
    }
    redraw() {
        if (Border.draw.centerX !== 0 || Border.drawborder.centerY !== 0) return;
        this.container.destroy();
    }
}