import { Variables } from "../Game/Variables";
import { Functions } from "../Game/Functions";
import { Bublex } from "../Network/Socket";
import { Settings } from ".";
import $ from 'jquery';
import Swal from 'sweetalert2';

export class Keybinds {
    static DoubleSplitKey = "DoubleSplit";
    static TripleSplitKey = "TripleSplit";
    static SixteenSplitKey = "16 Split";
    static FeedMacro = "FeedMacro";

    static keydown(event) {
        var key = Functions.processKey(event);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: 'SwalPopupDark',
            }
           // timerProgressBar: true,
          })
        if (Variables.pressed[key]) return;
        if (Variables.pressed.hasOwnProperty(key)) Variables.pressed[key] = true;
        if (key === "enter") {
            if (Variables.escOverlayShown || !Settings.Options.showChat) return;
            if (Variables.isTyping) {
                Variables.chatBox.blur();
                var text = Variables.chatBox.value;
                if (text.length > 0) Functions.sendChatMessage(text);
                Variables.chatBox.value = "";
            } else Variables.chatBox.focus();
        } else if (key === "escape") {
            Variables.escOverlayShown ? Functions.hideESCOverlay() : Functions.showESCOverlay();
        } else {
            if (Variables.isTyping || Variables.escOverlayShown) return;
            var code = Variables.KEY_TO_OPCODE[key];
            if (code !== undefined) Bublex.wsSend(code);
        }
            $("#canvas").mousedown(function() {
                if(Settings.Options.mouseEject) {
                if (Variables.macroIntervalID == null) {
                    Bublex.wsSend(new Uint8Array([21]));
                    Variables.macroIntervalID = setInterval(function() {
                        Bublex.wsSend(new Uint8Array([21]));
                    }, Variables.MacroW);
                }
            }
            })
            /* eslint-disable-next-line */
      switch(key) {
        case localStorage.getItem("feedMacroKey"):
        if (Variables.macroIntervalID == null) {
                Bublex.wsSend(new Uint8Array([21]));
                    Variables.macroIntervalID = setInterval(function() {
                        Bublex.wsSend(new Uint8Array([21]));
                    }, Variables.MacroW);
                }
        break;
        case localStorage.getItem("sixteenSplitKey"):
            Functions.emit(17);
            setTimeout(() => {
                Functions.emit(17);
            }, 40)
            setTimeout(() => {
                Functions.emit(17);
            }, 80)
            setTimeout(() => {
                Functions.emit(17);
            }, 120)
        break;
        case localStorage.getItem("tripleSplitKey"):
            Functions.emit(17);
            setTimeout(() => {
                Functions.emit(17);
            }, 50)
            setTimeout(() => {
                Functions.emit(17);
            }, 100)
            setTimeout(() => {
                Functions.emit(17);
            }, 130)
        break;
        case localStorage.getItem("doubleSplitKey"):
            setTimeout(() => {
                Functions.emit(17);
            }, 50)
            setTimeout(() => {
                Functions.emit(17);
            }, 100)
        break;
        case localStorage.getItem("stopMovingKey"):
            var X = null;
            var Y = null;
            X = window.innerWidth / 2;
		Y = window.innerHeight /2;
		$("#canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;

        case localStorage.getItem("stopMovingLockKey"):
            Variables.isPressed = true;
            if(Variables.isPressed = true) {
                var X = null;
                var Y = null;
                X = window.innerWidth / 2;
		        Y = window.innerHeight /2;
                $(".stoplock").css("display", "block");
		        $("#canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
            }
        break;

        case localStorage.getItem("showChatKey"):
            $(".chat").show();
            Toast.fire({
                icon: 'info',
                title: `You can see the chat.`
            })
        break;
        case localStorage.getItem("hideChatKey"):
            $(".chat").hide();
            Toast.fire({
                icon: 'info',
                title: `The chat is hidden.`
            })
        break;

        case localStorage.getItem("showLeaderboardKey"):
            $("#leaderboard").show();
            Toast.fire({
                icon: 'info',
                title: `You can see the Leaderboard.`
            })
        break;
        case localStorage.getItem("hideLeaderboardKey"):
            $("#leaderboard").hide();
            Toast.fire({
                icon: 'info',
                title: `The Leaderboard is hidden.`
            })
        break;

        case localStorage.getItem("showHudKey"):
            $("#hud").show();
            Toast.fire({
                icon: 'info',
                title: `You can see the HUD.`
            })
        break;
        case localStorage.getItem("hideHudKey"):
            $("#hud").hide();
            Toast.fire({
                icon: 'info',
                title: `The HUD is hidden.`
            })
        break;

        case localStorage.getItem("showMinimapKey"):
            Settings.Options.showMinimap = true;
            Toast.fire({
                icon: 'info',
                title: `You can see the minimap.`
            })
        break;
        case localStorage.getItem("hideMinimapKey"):
            Settings.Options.showMinimap = false;
            Toast.fire({
                icon: 'info',
                title: `The minimap is hidden.`
            })
        break;

        case localStorage.getItem("showTimeKey"):
            $("#Time").show();
            Toast.fire({
                icon: 'info',
                title: `You can see the time.`
            })
        break;
        case localStorage.getItem("hideTimeKey"):
            $("#Time").hide();
            Toast.fire({
                icon: 'info',
                title: `The time is hidden.`
            })
        break;
      }
    }

    static keyup(event) {
        var key = Functions.processKey(event);
        if (Variables.pressed.hasOwnProperty(key)) Variables.pressed[key] = false;
            $("#canvas").mouseup(function() {
                if (Variables.macroIntervalID != null) clearInterval(Variables.macroIntervalID);
                Variables.macroIntervalID = null;
            })
        if (key === localStorage.getItem("feedMacroKey")) {
          if (Variables.macroIntervalID != null) clearInterval(Variables.macroIntervalID);
          Variables.macroIntervalID = null;
        }
        if (key === localStorage.getItem("stopMovingLockKey")) {
            Variables.isPressed = false;
            $(".stoplock").css("display", "none");
        }
        if (key === 27) {
                Variables.pressed[key] = true;
                Variables.escOverlayShown ? Functions.hideESCOverlay() : Functions.showESCOverlay();
            }
    }
}