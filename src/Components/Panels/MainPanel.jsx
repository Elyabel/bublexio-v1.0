import Main from '../../StylesSheets/MainPanel.css';
import Panel from '../../StylesSheets/Panel.css';
import Style from '../../StylesSheets/SettingsModal.css';
import React from 'react';

import $ from 'jquery'

import { Writer } from '../Core/Network/Writer';
import { Settings } from '../Core/Settings';
import { Functions } from '../Core/Game/Functions';
import { Bublex } from '../Core/Network/Socket';
import { Stats } from '../Core/World';
import { Variables } from '../Core/Game/Variables';

const MainPanel = () => {
    function OpenSettingsModal() {
        $(`#${Style.Modal}`).fadeIn(250);
        
    }
    
    function sendPlay(name) {
        const writer = new Writer(true);
        writer.setUint8(0x00);
        writer.setStringUTF8(name);
        Bublex.wsSend(writer);
    }
    function play() {

        const skin = Settings.Options.skin;
        sendPlay((skin ? `<${skin}>` : '' ) + Settings.Options.nick);
        Functions.hideESCOverlay();
    }

    function sendSpectate() {
        Bublex.wsSend(Variables.UINT8_CACHE[1]);
        Stats.create.maxScore = 0;
        Functions.hideESCOverlay();
    }
    function spectate() {
        sendSpectate();
        Functions.hideESCOverlay();
    }

    return (
        <div id={Main.MainCol}>
            <div id={Panel.Panel} className={Main.MainContent}>
               <div className={Main.Content}>
                    <input placeholder='Enter your nickname' type="text" id="nick" maxLength="25" />
                    <input type="hidden" id="skin" value=""></input>
                    <div className={Main.AdsPart}>
                        <center><p>Advertisement</p></center>
                        <center>
                            <div className={Main.Advertisement}>
                            
                            </div>
                        </center>
                    </div>
                    <div className={Main.mainbuttons}>
                        <button className={Main.Settings} onClick={OpenSettingsModal}><i className="fa-solid fa-gear"></i></button>
                        <button className={Main.Spectate} id="spectate" onClick={() => spectate()}><i className="fa-solid fa-eye"></i></button>
                    </div>
                    <button className={Main.Play} id="play" onClick={() => play()}><i className="fa-solid fa-circle-play"></i></button>
                    <a href='https://bublexio.statuspage.io/' target="_blank" rel='noreferrer'>Bublex.io Status</a>
                    
                    <a href='https://discord.gg/gUaFuwDtQB' target="_blank" rel='noreferrer'>Discord</a>

                    <a href='./tos.html' target="_blank" rel="noreferrer">Terms of Service</a>
                </div>
                
            </div>
        </div>
    );
}

export { MainPanel }