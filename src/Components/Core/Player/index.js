import * as PIXI from 'pixi.js';
import { Variables } from '../Game/Variables';
import { Border, Cells } from '../World';
import { PlayerCamera } from './Camera';
import { Settings } from '../Settings';
import { Color } from './Color';

export class Player {
    static playerText = new PIXI.Text('', {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fill: 0xffffff,
        align: 'center',
        strokeThickness: 1,
    });

    static clearPlayers() {
        Variables.texturepl.clear();
        this.playerText.text = "";
        this.updatePlayers();
    }

    static updatePlayers() {
        if (Border.draw.centerX !== 0 || Border.draw.centerY !== 0 || !Settings.Options.showMinimap) return;
        var targetSize = 200;
        var borderAR = Border.draw.width / Border.draw.height; // aspect ratio
        var width = targetSize * borderAR * PlayerCamera.camera.viewportScale;
        var height = targetSize / borderAR * PlayerCamera.camera.viewportScale;
        var beginX = Variables.view.width - width - 10;
        var beginY = Variables.view.height - height - 10;
        var sectorCount = 5;
        var sectorWidth = width / sectorCount;
        var sectorHeight = height / sectorCount;
        var sectorNameSize = Math.min(sectorWidth, sectorHeight) / 3;
        var xScaler = width / Border.draw.width;
        var yScaler = height / Border.draw.height;
        var halfWidth = Border.draw.width / 2;
        var halfHeight = Border.draw.height / 2;
        var myPosX = beginX + (PlayerCamera.camera.x + halfWidth) * xScaler;
        var myPosY = beginY + (PlayerCamera.camera.y + halfHeight) * yScaler;



        if (Cells.Variable.mine.length) {
            for (var i = 0; i < Cells.Variable.mine.length; i++) {
                var cell = Cells.Variable.byId[Cells.Variable.mine[i]];
                if (cell) {
                    Variables.texturepl.beginFill(`0x${localStorage.getItem("cellColor")}`);
                    var x = beginX + (cell.x + halfWidth) * xScaler;
                    var y = beginY + (cell.y + halfHeight) * yScaler;
                    var r = Math.max(cell.s, 200) * (xScaler + yScaler) / 2;
                    Variables.texturepl.moveTo(x + r, y);
                    Variables.texturepl.arc(x, y, r, 0, Variables.PI_2);
                    Variables.mapplayer.addChild(Variables.texturepl);
                }
            }
        } else {
            Variables.texturepl.beginFill(0xFAAFFF);
            Variables.texturepl.arc(myPosX, myPosY, 5, 0, Variables.PI_2);
            Variables.mapplayer.addChild(Variables.texturepl);
        }
        /* eslint-disable-next-line */
        var cell = null;
        /* eslint-disable-next-line */
        for (var i = 0, l = Cells.Variable.mine.length; i < l; i++)
            if (Cells.Variable.byId.hasOwnProperty(Cells.Variable.mine[i])) {
                cell = Cells.Variable.byId[Cells.Variable.mine[i]];
                break;
            }
        if (cell !== null) {
            var textSize = sectorNameSize;
            Player.playerText.text = cell.name.split("&&&")[0] || Variables.EMPTY_NAME;
            Player.playerText.style.fontSize = textSize;
            Player.playerText.x = myPosX - textSize;
            Player.playerText.y = myPosY - 15 - textSize / 2;
            Variables.mapplayer.addChild(Player.playerText);
        }

        /* eslint-disable-next-line */
        for (var i = 0, l = Cells.Variable.mine.length; i < l; i++)
            if (Cells.Variable.byId.hasOwnProperty(Cells.Variable.mine[i])) {
                cell = Cells.Variable.byId[Cells.Variable.mine[i]];
                break;
            }
        if (cell !== null) {
            /* eslint-disable-next-line */
            var textSize = sectorNameSize;
            Player.playerText.text = cell.name.split("&&&")[0] || Variables.EMPTY_NAME;
            Player.playerText.style.fontSize = textSize;
            Player.playerText.x = myPosX - textSize;
            Player.playerText.y = myPosY - 15 - textSize / 2;
            Variables.mapplayer.addChild(Player.playerText);
        }
    }
}