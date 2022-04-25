import { Variables } from "./Variables";
import { Writer } from "../Network/Writer";
import { Bublex } from "../Network/Socket";
import { drawMap } from "../World";
import { Settings } from "../Settings";
import $ from 'jquery';

export class Functions {
    static hideESCOverlay() {
        Variables.escOverlayShown = false;
        $(`.gameOverlay`).hide();
    }

    static showESCOverlay() {
        Variables.escOverlayShown = true;
        $(`.gameOverlay`).fadeIn(150);
    }

    static cleanupObject(object) {
        for (const i in object) delete object[i];
    }

	static prettyMass(MassInKs) {
        if (MassInKs > 999) MassInKs = String((MassInKs / 1000).toFixed(1)) + "k";
        return MassInKs.toString();
    }

    static escapeHtml = function() {
        var buf = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            "/": "&#x2F;",
            '"': "&quot;",
            "\\": "&#92;"
        };
        return function(messageFormat) {
            return messageFormat.replace(/["&<>]/g, function(off) {
                return buf[off];
            });
        };
    }();

    static byId(id) {
        return document.getElementById(id);
    }

    static processKey(event) {
        var key;
        if (Variables.CODE_TO_KEY[event.code]) {
            key = Variables.CODE_TO_KEY[event.code];
        } else {
            key = event.key.toLowerCase();
        }
        if (Variables.IE_KEYS.hasOwnProperty(key)) key = Variables.IE_KEYS[key]; // IE fix
        return key;
    }

    static handler() {
        return null != Variables.ws && Variables.ws.readyState === Variables.ws.OPEN;
    }

    static encode(expectedNumberOfNonCommentArgs) {
        return new DataView(new ArrayBuffer(expectedNumberOfNonCommentArgs));
    }

    static cb(s) {
        let fx;
        /* eslint-disable-next-line */
        fx++;
        Variables.ws.send(s.buffer);
    }

    static emit(expectedNumberOfNonCommentArgs) {
        if (this.handler()) {
            var buf = this.encode(1);
            buf.setUint8(0, expectedNumberOfNonCommentArgs);
            this.cb(buf);
        }
    }

    static sendMouseMove(x, y) {
        const writer = new Writer(true);
        writer.setUint8(0x10);
        writer.setUint32(x);
        writer.setUint32(y);
        writer._b.push(0, 0, 0, 0);
        Bublex.wsSend(writer);
    }

    static sendChatMessage(text) {
        const writer = new Writer();
        writer.setUint8(0x63);
        writer.setUint8(0);
        writer.setStringUTF8(text);
        Bublex.wsSend(writer);
    }

    static drawGrid() {
        if (window.gridDrew === true) return;
        window.gridDrew = true;
        if (window.mapBackground) window.mapBackground.container.destroy() && Variables.borderDraw.clear();
        if (Settings.Options.showGrid) window.mapBackground = new drawMap(Variables.application); 
    }
}