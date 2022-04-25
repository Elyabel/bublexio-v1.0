import * as PIXI from 'pixi.js';
import Axios from 'axios';

export class Variables {
    static LOAD_START = Date.now();
    static WEBSOCKET_URL = null;
    static invocation = new XMLHttpRequest();
    static SKIN_URL = 'https://skins.bublex.io/skins/';
    static USE_HTTPS = 'https:' === window.location.protocol;
    static EMPTY_NAME = 'Bublex.io'
    static PI_2 = Math.PI * 2;
    static SEND_254 = new Uint8Array([254, 6, 0, 0, 0]);
    static SEND_255 = new Uint8Array([255, 1, 0, 0, 0]);
    static UINT8_CACHE = {
        1: new Uint8Array([1]),
        17: new Uint8Array([17]),
        21: new Uint8Array([21]),
        18: new Uint8Array([18]),
        19: new Uint8Array([19]),
        22: new Uint8Array([22]),
        23: new Uint8Array([23]),
        24: new Uint8Array([24]),
        25: new Uint8Array([25]),
        110: new Uint8Array([110]), // DoubleSplit packet
        111: new Uint8Array([111]), // TripleSplit packet
        112: new Uint8Array([112]), // SixteenSplit packet
        254: new Uint8Array([254]),		   
    };
    static spaceKey = " ";
   /* static KEY_TO_OPCODE = {
       // spaceKey: this.UINT8_CACHE[17],
        feedMacroKey: this.UINT8_CACHE[21],
        "q": this.UINT8_CACHE[18],
        "e": this.UINT8_CACHE[22],
        "r": this.UINT8_CACHE[23],
        "t": this.UINT8_CACHE[24],
        "p": this.UINT8_CACHE[25],
        "tab": this.UINT8_CACHE[19],
    };*/
    static IE_KEYS = {
        "spacebar": ' ',
        "esc": 'escape'
    };

    static knownSkins = new Map();
    static loadedSkins = new Map();

    static wsUrl = Variables.WEBSOCKET_URL;
    static ws = null;
    static disconnectDelay = 1000;

    static syncUpdStamp = Date.now();
    static syncAppStamp = Date.now();

    static view = null;
    static application = null;
    static cellContainer = null;
    static bgContainer = null;
    static borderContainer = null;
    static MacroW = 100 / 9;

    static textures = {
        cell: null,
        pellet: null
    }

    static escOverlayShown = false;
    static isTyping = false;
    static chatBox = null;
    static mapCenterSet = false;
    static mouseX = NaN;
    static mouseY = NaN;
    static macroIntervalID;

    static isPressed = false;

    static pressed = {
        " ": false,
        feedMacroKey: false,
        "e": false,
        "r": false,
        "t": false,
        "p": false,
        "q": false,
        "enter": false,
        "escape": false
    };
    static KEY_TO_OPCODE = {
        " ": Variables.UINT8_CACHE[17],
        feedMacroKey: Variables.UINT8_CACHE[21],
        "q": Variables.UINT8_CACHE[18],
        "e": Variables.UINT8_CACHE[22],
        "r": Variables.UINT8_CACHE[23],
        "t": Variables.UINT8_CACHE[24],
        "p": Variables.UINT8_CACHE[25]
    };
    static CODE_TO_KEY = {
        " ": false,
        feedMacroKey: false,
        "e": false,
        "r": false,
        "t": false,
        "p": false,
        "q": false,
        "escape": false
    };

    static borderDraw = new PIXI.Graphics();

    static mapsquare = new PIXI.Container();
    static mapsector = new PIXI.Container();
    static mapplayer = new PIXI.Container();
    static texturepl = new PIXI.Graphics();
    static square = new PIXI.Graphics();

    static nickList = {};
    static skinList = {};
    static massList = {};

    static selectedSkin;
}