
import Style from '../../StylesSheets/SettingsModal.css';
import '../../StylesSheets/game.css'
import $ from 'jquery'
import React, {useState} from 'react';

import { Settings } from '../Core/Settings';

/*<div id={Style.OptionCard}>
                <input type="checkbox" id="showNames" />
                <label htmlFor="showNames">Names</label>
            </div>*/

            /*<div id={Style.OptionCardAnimationDelay}>
                
                    <p id="animationnumber">Animation Delay: 120</p>
                    <input type="range" className="AnimationDelay" min="100" max="350" step="5" defaultValue="120" />
                
            </div>*/

const General = () => {
    let API;
    function setAnimationDelay(a) {
		Settings.Options.animationDelay = a;
    };
        $(document).on('change', `.AnimationDelay`, function() {
            $(`#animationnumber`).html("Animation Delay: " + $(this).val());
            setAnimationDelay($(this).val());
            Settings.Options.animationDelay = $(this).val();
        })
    return (
        <div className={Style.General} id={Style.SettingsList}>
            <h2>General Settings</h2>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showNames" />
                <label htmlFor="showNames">Names</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showSkins" />
                <label htmlFor="showSkins">Skins</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="cellBorders" />
                <label htmlFor="cellBorders">Cell Borders</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showChat" />
                <label htmlFor="showChat">Chat</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showGrid" />
                <label htmlFor="showGrid">Background</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showMass" />
                <label htmlFor="showMass">Mass</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showBorder" />
                <label htmlFor="showBorder">Map Border</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="showMinimap" />
                <label htmlFor="showMinimap">Minimap</label>
            </div>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="mouseEject" />
                <label htmlFor="mouseEject">Mouse Eject</label>
            </div>

            <div id={Style.OptionCardAnimationDelay}>
                
                    <p id="animationnumber">Animation Delay: 120</p>
                    <input type="range" className="AnimationDelay" min="100" max="350" step="5" defaultValue="120" />
                
            </div>

        </div>
    )
}

export { General }