import Style from '../../StylesSheets/SettingsModal.css';
import React from 'react';

const Mouse = () => {
    return (
        <div className={Style.Mouse} id={Style.SettingsList}>
            <h2>Mouse Settings</h2>
            <div id={Style.OptionCard}>
                <input type="checkbox" id="mouseEject" />
                <label htmlFor="mouseEject">Mouse Eject</label>
            </div>
        </div>
    )
}

export { Mouse }