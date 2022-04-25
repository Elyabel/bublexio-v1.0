import Style from '../../StylesSheets/SettingsModal.css';
import Virus from '../../StylesSheets/VirusModal.css';
import '../../StylesSheets/game.css'
import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery'
import { Settings } from '../Core/Settings';

const Theme = () => {
    
    function changeBackground() {
        var valuecolor = $('#Background').val();
        const after = valuecolor.substring(valuecolor.indexOf('#') + 1);

        localStorage.setItem("backgroundColor", after)
    }

    function changeBorders() {
        var valuecolor = $('#Borders').val();
        const after = valuecolor.substring(valuecolor.indexOf('#') + 1);

        localStorage.setItem("bordersColor", after)
    }

    function changeVirus() {
        var valuecolor = $('#Virus').val();
        const after = valuecolor.substring(valuecolor.indexOf('#') + 1);

        localStorage.setItem("virusColor", after)
    }

    function changeCellborder() {
        var valuecolor = $('#CellBorderColor').val();
        const after = valuecolor.substring(valuecolor.indexOf('#') + 1);

        localStorage.setItem("cellborderColor", after)
    }

    function changeCell() {
        var valuecolor = $('#CellColor').val();
        const after = valuecolor.substring(valuecolor.indexOf('#') + 1);

        localStorage.setItem("cellColor", after)
    }

    function changeVirus() {
        var valuecolor = $('#VirusColor').val();
        const after = valuecolor.substring(valuecolor.indexOf('#') + 1);

        localStorage.setItem("virusColor", after)
    }

    useEffect(() => {
        if(localStorage.getItem("cellborderColor") === null) {
            localStorage.setItem("cellborderColor", "ffffff")
        }

        if(localStorage.getItem("cellColor")) {
            localStorage.setItem("cellColor", "1472ff")
        }

        if(localStorage.getItem("virusColor") === null) {
            localStorage.setItem("virusColor", "2fff00")
        }
    })

    function setHudSize(a) {
		//Settings.Options.BUBLEXhudSize = a;
    };
   /* $(document).on('change', `.HudSizeRange`, function() {
        $(`#hudnumber`).html("HUD Size: " + $(this).val());
        setHudSize($(this).val());
        Settings.Options.BUBLEXhudSize = $(this).val();
        $("#hud").css("zoom", `${Settings.Options.BUBLEXhudSize}`)
    });

    setTimeout(() => {
        $("#hud").css("zoom", `${Settings.Options.BUBLEXhudSize}`)
    }, 1000)*/

    return (
        <div className={Style.Theme} id={Style.SettingsList}>
            <h2>Theme Settings</h2>
            <div id={Style.ThemeCard}>
                <input type="color" id="Borders" name="Borders" onChange={changeBorders} defaultValue="#ffffff" />
                <label htmlFor="Borders">Borders</label>
            </div>

            <div id={Style.ThemeCard}>
                <input type="color" id="Background" name="Background" onChange={changeBackground} defaultValue="#141414" />
                <label htmlFor="Background">Background</label>
            </div>

            <div id={Style.ThemeCard}>
                <input type="color" id="CellBorderColor" name="CellBorderColor" onChange={changeCellborder} defaultValue="#ffffff" />
                <label htmlFor="CellBorderColor">Cell Border</label>
            </div>

            <div id={Style.ThemeCard}>
                <input type="color" id="CellColor" name="CellColor" onChange={changeCell} defaultValue="#ffffff" />
                <label htmlFor="CellColor">Cell Color</label>
            </div>

            <div id={Style.ThemeCard}>
                <input type="color" id="VirusColor" name="VirusColor" onChange={changeVirus} defaultValue="#ffffff" />
                <label htmlFor="VirusColor">Virus Color</label>
            </div>

            <p>Note: Once you have chosen your color for the cell border, please refresh your page for the change to be saved</p>

            <div id={Style.OptionCardAnimationDelay}>
                
                    <p id="hudnumber">HUD Size: 1</p>
                    <input type="range" className="HudSizeRange" min="0.3" max="2" step="0.1" defaultValue="1" />
                
            </div>

        </div>
    )
}

export { Theme }