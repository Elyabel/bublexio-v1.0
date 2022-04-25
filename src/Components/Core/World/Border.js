import { GlowFilter } from 'pixi-filters';
import * as PIXI from 'pixi.js';
import { Variables } from '../Game/Variables';
import { Settings } from '../Settings';

export class Border {
    static draw = Object.create({
        left: -2000,
        right: 2000,
        top: -2000,
        bottom: 2000,
        width: 4000,
        height: 4000,
        centerX: -1,
        centerY: -1
    });

    constructor(game) {
        this.game = game;
        this.container = new PIXI.Container();
        this.borders = new PIXI.Graphics();
        const borderWidth = 0.5;
        const borderColor = localStorage.getItem("bordersColor");
        const showBorder =  Settings.Options.showBorder;

        if (showBorder) {
            this.borders.lineStyle(80, borderColor);
	        this.borders.drawRect(this.top, -this.bottom, this.width, this.height);
            this.borders.endFill();
        }

        this.initializate();
    }

    initializate() {
        if (Border.draw.centerX !== 0 || Border.draw.centerY !== 0) return;
        this.container.addChild(this.borders)
        Variables.borderContainer.addChild(this.container);
    }
    redraw() {
        if (Border.draw.centerX !== 0 || Border.drawborder.centerY !== 0) return;
        this.container.destroy();
    }
}