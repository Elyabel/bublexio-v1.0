import { Settings } from "../Settings";
import { Variables } from "../Game/Variables";
import { Border } from ".";
import { PlayerCamera } from "../Player/Camera";
import * as PIXI from 'pixi.js';

export class Minimap {
    static clearSquare() {
        Variables.square.clear();
        while (Variables.mapsector.children[0]) {
            Variables.mapsector.removeChild(Variables.mapsector.children[0]);
        }
        Minimap.drawSquare();
    }

    static drawSquare() {
        if (!Settings.Options.showMinimap) return;
        var targetSize = 200;
        var borderAR = Border.draw.width / Border.draw.height; // aspect ratio
        var width = targetSize * borderAR * PlayerCamera.camera.viewportScale;
        var height = targetSize / borderAR * PlayerCamera.camera.viewportScale;
        var beginX = Variables.view.width - width - 10;
        var beginY = Variables.view.height - height - 10;
        var sectorCount = 5;
        var sectorNames = ["ABCDE", "12345"];
        var sectorWidth = width / sectorCount;
        var sectorHeight = height / sectorCount;
        var sectorNameSize = Math.min(sectorWidth, sectorHeight) / 3;

        for (var i = 0; i < sectorCount; i++) {
            var x = (i + 0.5) * sectorWidth;
            for (var j = 0; j < sectorCount; j++) {
                var y = (j + 0.5) * sectorHeight;
                let sectorText = new PIXI.Text(sectorNames[0][i] + sectorNames[1][j], {
                    fontFamily: 'Ubuntu',
                    fontSize: sectorNameSize,
                    fill: 0xffffff,
                    align: 'center',
                    strokeThickness: 1,
                })
                sectorText.x = beginX - 10 + x;
                sectorText.y = beginY - 10 + y;
                Variables.mapsector.addChild(sectorText);
            }
        }
        Variables.square.beginFill(0x000000);
        Variables.square.drawRect(beginX, beginY, width, height);
        Variables.square.alpha = 0.4;
        Variables.mapsquare.addChild(Variables.square);

    }
}