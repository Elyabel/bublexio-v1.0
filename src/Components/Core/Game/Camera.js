import { PlayerCamera } from "../Player/Camera";
import { Settings } from "../Settings";
import { Variables } from "./Variables";
import { Stats, Cells } from "../World";

export class Camera {
    static toCamera(obj) {
        obj.pivot.set(PlayerCamera.camera.x, PlayerCamera.camera.y);
        this.scaleForth(obj);
        obj.position.set(Variables.view.width / 2, Variables.view.height / 2);
    }

    static scaleForth(obj) {
        obj.scale.set(1 / PlayerCamera.camera.scale);
    }

    static scaleBack(obj) {
        obj.scale.set(PlayerCamera.camera.scale);
    }

    static fromCamera(obj) {
        obj.position.set(PlayerCamera.camera.x, PlayerCamera.camera.y);
        this.scaleBack(obj);
        obj.position.set(Variables.view.width / 2, Variables.view.height / 2);
    }

    static cameraUpdate() {
        let cameraSmooth = Settings.Options.smoothCamera ? 100 : 80;
        const dt = Math.max(Math.min((Variables.syncAppStamp - PlayerCamera.camera.updated) / cameraSmooth, 0.5), 0);
        const myCells = [];

        for (const id of Cells.Variable.mine) {
            const cell = Cells.Variable.byId[id];
            if (cell) myCells.push(cell);
        }
        if (myCells.length > 0) {
            let x = 0;
            let y = 0;
            let s = 0;
            let score = 0;
            for (const cell of myCells) {
                score += ~~(cell.ns * cell.ns / 100);
                x += cell.x;
                y += cell.y;
                s += cell.s;
            }
            PlayerCamera.camera.target.x = x / myCells.length;
            PlayerCamera.camera.target.y = y / myCells.length;
            PlayerCamera.camera.sizeScale = Math.pow(Math.min(64 / s, 1), 0.4) && PlayerCamera.camera.userZoom;
            PlayerCamera.camera.target.scale = PlayerCamera.camera.sizeScale;
            PlayerCamera.camera.target.scale *= PlayerCamera.camera.viewportScale * PlayerCamera.camera.userZoom;
            PlayerCamera.camera.nx = (PlayerCamera.camera.target.x + PlayerCamera.camera.x) / 2;
            PlayerCamera.camera.ny = (PlayerCamera.camera.target.y + PlayerCamera.camera.y) / 2;
            Stats.create.score = score;
            Stats.create.maxScore = Math.max(Stats.create.maxScore, score);
        } else {
            Stats.create.score = NaN;
            Stats.create.maxScore = 0;
            PlayerCamera.camera.nx += (PlayerCamera.camera.target.x - PlayerCamera.camera.x) / 10;
            PlayerCamera.camera.ny += (PlayerCamera.camera.target.y - PlayerCamera.camera.y) / 10;
        }
        PlayerCamera.camera.scale += (PlayerCamera.camera.target.scale - PlayerCamera.camera.scale) / 9;


        PlayerCamera.camera.x = PlayerCamera.camera.oldPos.x + (PlayerCamera.camera.nx - PlayerCamera.camera.oldPos.x) * dt;
        PlayerCamera.camera.y = PlayerCamera.camera.oldPos.y + (PlayerCamera.camera.ny - PlayerCamera.camera.oldPos.y) * dt;

        PlayerCamera.camera.oldPos.x = PlayerCamera.camera.x;
        PlayerCamera.camera.oldPos.y = PlayerCamera.camera.y;

        this.toCamera(Variables.cellContainer);
        this.fromCamera(Variables.cellContainer);
        this.toCamera(Variables.bgContainer);
        this.fromCamera(Variables.bgContainer);
        PlayerCamera.camera.updated = Date.now();
    }

    static handleScroll(event) {
        //if (event.target !== document.getElementById('canvas') | event.target !== document.getElementById('stoplockscreen')) return;
        PlayerCamera.camera.userZoom *= event.deltaY > 0 ? 0.90 : 1.08;
        PlayerCamera.camera.userZoom = Math.max(PlayerCamera.camera.userZoom, .1);
        PlayerCamera.camera.userZoom = Math.min(PlayerCamera.camera.userZoom, 1);
    }
}