import * as PIXI from 'pixi.js';
import $ from 'jquery';

import { Settings } from './Settings';

import { Logger } from './Network/Logger';
import { Writer } from './Network/Writer';
import { Variables } from './Game/Variables';


import { Cells, Minimap } from './World';

import { PlayerCamera } from './Player/Camera';
import { Functions } from './Game/Functions';
import { Bublex } from './Network/Socket';
import { Camera } from './Game/Camera';
import { Keybinds } from './Settings/Keybinds';
import { Textures } from './Player/Textures';

(function () {

    PIXI.utils.skipHello();
 

    if (typeof WebSocket === 'undefined' || typeof DataView === 'undefined' ||
        typeof ArrayBuffer === 'undefined' || typeof Uint8Array === 'undefined') {
        alert('Your browser does not support required features, please update your browser or get a new one.');
        window.stop();
    }

    /* eslint-disable-next-line */
    Array.prototype.remove = function (a) {
        const i = this.indexOf(a);
        return i !== -1 && this.splice(i, 1);
    }
    Element.prototype.hide = function() {
        this.style.display = 'none';
        if (this.style.opacity === 1) this.style.opacity = 0;
    }
    Element.prototype.show = function(seconds) {
        this.style.display = '';
        if (!seconds) return;
        this.style.transition = `opacity ${seconds}s ease 0s`;
        this.style.opacity = 1;
    }

  //  window.draw = new PIXI.Graphics();


    async function init() {
        window.PIXI = PIXI;
        Variables.view = document.getElementById('canvas');
        Variables.application = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            view: Variables.view,  
            resizeTo: window,
            resolution: 1,
        })

        PIXI.settings.PREFER_ENV = PIXI.ENV.WEBGL;
        Variables.bgContainer = new PIXI.Container();
        Variables.bgContainer.sortableChildren = true;
        Variables.borderContainer = new PIXI.Container();
        Variables.borderContainer.sortableChildren = true;
        Variables.cellContainer = new PIXI.Container();
        Variables.cellContainer.sortableChildren = true;
        Variables.application.stage.addChild(Variables.bgContainer);
        Variables.application.stage.addChild(Variables.borderContainer);
        Variables.application.stage.addChild(Variables.cellContainer)
        Variables.application.stage.addChild(Variables.mapsquare);
        Variables.application.stage.addChild(Variables.mapsector);
        Variables.application.stage.addChild(Variables.mapplayer);

        Variables.view.addEventListener('webglcontextlost', (event) => {
            console.log(event);
        });
        /* eslint-disable-next-line */
        Variables.chatBox = Functions.byId('chat_textbox');
        Variables.view.focus();
        window.addEventListener('beforeunload', Settings.storeSettings);
        document.addEventListener('wheel', Camera.handleScroll, {
            passive: true
        });

        window.onkeydown = Keybinds.keydown;
        window.onkeyup = Keybinds.keyup;
        $("#canvas").on("mousemove", (event) => {
            Variables.mouseX = event.clientX;
            Variables.mouseY = event.clientY;
        });
        Variables.chatBox.onblur = () => {
            Variables.isTyping = false;
        };
        Variables.chatBox.onfocus = () => {
            Variables.isTyping = true;
        };
        setInterval(() => {
            let myCells = [];
            var x = 0;
            var y = 0;
            for (let i = 0; i < Cells.Variable.mine.length; i++) {
                if (Cells.Variable.byId.hasOwnProperty(Cells.Variable.mine[i])) {
                    myCells.push(Cells.Variable.byId[Cells.Variable.mine[i]]);
                }
            }

            for (let i = 0; i < myCells.length; i++) {
                x += myCells[i].x
                y += myCells[i].y;
            }
                /* eslint-disable-next-line */
            x /= myCells.length;
            /* eslint-disable-next-line */
            y /= myCells.length;

            Functions.sendMouseMove(
                (Variables.mouseX - Variables.view.width / 2) / PlayerCamera.camera.scale + PlayerCamera.camera.x,
                (Variables.mouseY - Variables.view.height / 2) / PlayerCamera.camera.scale + PlayerCamera.camera.y
            );
        }, 40);
        window.onresize = () => {
            const width = Variables.view.width = window.innerWidth;
            const height = Variables.view.height = window.innerHeight;
            PlayerCamera.camera.viewportScale = Math.max(width / width, height / height);
            Variables.application.renderer.resize(width, height);
            Minimap.clearSquare();
            Minimap.drawSquare();
        };
        window.onresize();
        Bublex.gameReset();
        Settings.loadSettings();

        Logger.info(`Init done in ${Date.now() - Variables.LOAD_START}ms`);
        Textures.preloadBullShit();
        let ticker = PIXI.Ticker.shared;
        ticker.autoStart = true;
        
        ticker.add(function (time) {
            Bublex.drawGame()
        }, PIXI.UPDATE_PRIORITY.LOW);
        ticker.start();

        document.getElementById("canvas").oncontextmenu = function (e) {
            const writer = new Writer(true);
            writer.setUint8(162);
            Bublex.wsSend(writer);
            return false;
        };
        let cmenu = document.getElementById("canvas");
        cmenu.onclick = () => {
            $("#contextMenu").css("display", "none");
        };

            Minimap.drawSquare();
    }

    window.skinsLoader = PIXI.Loader.shared;

    window.addEventListener("DOMContentLoaded", init);
})();