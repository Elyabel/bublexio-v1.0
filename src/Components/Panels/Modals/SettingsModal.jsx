import Settings from '../../../StylesSheets/SettingsModal.css';
import React from 'react';

import { Keybinds, Mouse, Theme, General } from '../../Settings';
import $ from 'jquery';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const SettingsModal = () => {
    function CloseSettingsModal() {
        $(`#${Settings.Modal}`).fadeOut(250);
    }
    return (
        <div id={Settings.Modal} style={{display: "none"}}>
            <button className={Settings.closeButton} onClick={CloseSettingsModal}><i className="fa-solid fa-xmark"></i></button>
            <div className={Settings.allcontentsettings}>
            <Tabs className={Settings.Nav}>
                <TabList className={Settings.NavigationBar}>
                <Tab>
                    <p id="generalsettingstab">General</p>
                </Tab>
                <Tab>
                    <p>Keybinds</p>
                </Tab>
                <Tab>
                    <p>Theme</p>
                </Tab>
                </TabList>

                <TabPanel>
                <div className={Settings.Content}>
                    <General />
                </div>
                </TabPanel>
                <TabPanel>
                <div className={Settings.Content}>
                    <Keybinds />
                </div>
                </TabPanel>
                <TabPanel>
                <div className={Settings.Content}>
                    <Theme />
                </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
}

export { SettingsModal }

/*
<tr className="controlrow" ><td>Feed</td><td keycode="doubleSplitKey"><input type="text" maxLength="1" id="FeedMacro" className={Settings.MacroBox}></input></td></tr>
		                <tr className="controlrow" ><td>Doublesplit</td><td keycode="doubleSplitKey"><input type="text" maxLength="1" id="DoubleSplit" className={Settings.MacroBox}></input></td></tr>
                        <tr className="controlrow" ><td>Triplesplit</td><td keycode="tripleSplitKey"><input type="text" maxLength="1" id="TripleSplit" className={Settings.MacroBox}></input></td></tr>
		                <tr className="controlrow" ><td>16X</td><td keycode="sixteenSplitKey"><input type="text" maxLength="1" id="MacroSplit" className={Settings.MacroBox}></input></td></tr>
		                <tr className="controlrow" ><td>Stop moving</td><td keycode="doubleSplitKey"><input type="text" maxLength="1" id="StopMovement" className={Settings.MacroBox}></input></td></tr>    
                        
                        */