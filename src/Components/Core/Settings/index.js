import $ from 'jquery'
import { Functions } from '../Game/Functions';
import { Logger } from '../Network/Logger';

import Style from '../../../StylesSheets/SettingsModal.css';

export class Settings {
    static Options = {
        smoothCamera: true,
    showCustom: false,
    displayCoins: false,
    cellquality: 1,
    gamemode: '',
    nick: '',
    skin: '',
    showSkins: true,
    showNames: true,
    darkTheme: false,
    showMass: false,
    showLeaderboard: true,
    _showChat: true,
    get showChat() {
        return this._showChat
    },
    set showChat(a) {
        var chat = $('.chat');
        a ? chat.fadeIn('fast') : chat.fadeOut('fast');
        this._showChat = a
    },
    showMinimap: true,
    showPosition: false,
    showBorder: true,
    showGrid: true,
    playSounds: false,
    moreZoom: false,
    fillSkin: true,
    cellBorders: true,
    backgroundSectors: false,
    fpsOption: false,
    animationDelay: 130,
    BUBLEXhudSize: 0,
    latencyOption: false,
    classyEffect: false,
    mouseEject: false,
    cellShape: false,
    showTime: true,
    }

    static initSetting(id, elm) {
        function simpleAssignListen(id, elm, prop) {
            if (Settings.Options[id] !== '') elm[prop] = Settings.Options[id];
            elm.addEventListener('change', () => {
                Settings.Options[id] = elm[prop];
            });
        }
        /* eslint-disable-next-line */
        switch (elm.tagName.toLowerCase()) {
            case 'input':
                /* eslint-disable-next-line */
                switch (elm.type.toLowerCase()) {
                    case 'range':
                    case 'text':
                        simpleAssignListen(id, elm, 'value');
                        break;
                    case 'checkbox':
                        simpleAssignListen(id, elm, 'checked');
                        break;
                }
                break;
            case 'select':
                simpleAssignListen(id, elm, 'value');
                break;
        }
    }

    static loadSettings() {
        const text = localStorage.getItem('settings');
        const obj = text ? JSON.parse(text) : Settings.Options;
        for (const prop in Settings.Options) {
            const elm = Functions.byId(prop.charAt(0) === '_' ? prop.slice(1) : prop);
            if (elm) {
                if (Object.hasOwnProperty.call(obj, prop)) Settings.Options[prop] = obj[prop];
                this.initSetting(prop, elm);
            } else Logger.info(`setting ${prop} not loaded because there is no element for it.`);
        }
    }

    static storeSettings() {
        localStorage.setItem('settings', JSON.stringify(Settings.Options));
    }
    
}

