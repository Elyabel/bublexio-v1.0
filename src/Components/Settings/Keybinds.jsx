import Style from '../../StylesSheets/SettingsModal.css';
import React from 'react'

const Keybinds = () => {
    React.useEffect(() => {
        let doubleSplitBox = document.querySelector("#DoubleSplit");
        let tripleSplitBox = document.querySelector("#TripleSplit");
        let sixteenSplitBox = document.querySelector("#SixteenSplit");
        let feedMacroBox = document.querySelector("#FeedMacro");
        let stopMovingBox = document.querySelector("#StopMoving");
        let stopMovingLockBox = document.querySelector("#StopMovingLock");
        let showChatBox = document.querySelector("#ShowChat");
        let hideChatBox = document.querySelector("#HideChat");
        let showLeaderboardBox = document.querySelector("#ShowLeaderboard");
        let hideLeaderboardBox = document.querySelector("#HideLeaderboard");
        let showHudBox = document.querySelector("#ShowHUD");
        let hideHudBox = document.querySelector("#HideHUD");
        let showMinimapBox = document.querySelector("#ShowMinimap");
        let hideMinimapBox = document.querySelector("#HideMinimap");
        let showTimeBox = document.querySelector("#ShowTime");
        let hideTimeBox = document.querySelector("#HideTime");

        doubleSplitBox.addEventListener("keydown", event => {
            doubleSplitBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("doubleSplitKey", doubleSplitBox.innerText.toLowerCase());
        });

        tripleSplitBox.addEventListener("keydown", event => {
            tripleSplitBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("tripleSplitKey", tripleSplitBox.innerText.toLowerCase());
        });

        sixteenSplitBox.addEventListener("keydown", event => {
            sixteenSplitBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("sixteenSplitKey", sixteenSplitBox.innerText.toLowerCase());
        });

        feedMacroBox.addEventListener("keydown", event => {
            feedMacroBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("feedMacroKey", feedMacroBox.innerText.toLowerCase());
        });

        stopMovingBox.addEventListener("keydown", event => {
            stopMovingBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("stopMovingKey", stopMovingBox.innerText.toLowerCase());
        });

        stopMovingLockBox.addEventListener("keydown", event => {
            stopMovingLockBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("stopMovingLockKey", stopMovingLockBox.innerText.toLowerCase());
        });

        showChatBox.addEventListener("keydown", event => {
            showChatBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("showChatKey", showChatBox.innerText.toLowerCase());
        });
        hideChatBox.addEventListener("keydown", event => {
            hideChatBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("hideChatKey", hideChatBox.innerText.toLowerCase());
        });

        showLeaderboardBox.addEventListener("keydown", event => {
            showLeaderboardBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("showLeaderboardKey", showLeaderboardBox.innerText.toLowerCase());
        });
        hideLeaderboardBox.addEventListener("keydown", event => {
            hideLeaderboardBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("hideLeaderboardKey", hideLeaderboardBox.innerText.toLowerCase());
        });

        showHudBox.addEventListener("keydown", event => {
            showHudBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("showHudKey", showHudBox.innerText.toLowerCase());
        });
        hideHudBox.addEventListener("keydown", event => {
            hideHudBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("hideHudKey", hideHudBox.innerText.toLowerCase());
        });

        showMinimapBox.addEventListener("keydown", event => {
            showMinimapBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("showMinimapKey", showMinimapBox.innerText.toLowerCase());
        });
        hideMinimapBox.addEventListener("keydown", event => {
            hideMinimapBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("hideMinimapKey", hideMinimapBox.innerText.toLowerCase());
        });

        showTimeBox.addEventListener("keydown", event => {
            showTimeBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("showTimeKey", showTimeBox.innerText.toLowerCase());
        });
        hideTimeBox.addEventListener("keydown", event => {
            hideTimeBox.innerText = event.key === " " ? event.code : event.key;
            localStorage.setItem("hideTimeKey", hideTimeBox.innerText.toLowerCase());
        });

        doubleSplitBox.innerText = localStorage.getItem("doubleSplitKey");
        tripleSplitBox.innerText = localStorage.getItem("tripleSplitKey");
        sixteenSplitBox.innerText = localStorage.getItem("sixteenSplitKey");
        feedMacroBox.innerText = localStorage.getItem("feedMacroKey");
        stopMovingBox.innerText = localStorage.getItem("stopMovingKey");
        stopMovingLockBox.innerText = localStorage.getItem("stopMovingLockKey");

        showChatBox.innerText = localStorage.getItem("showChatKey");
        hideChatBox.innerText = localStorage.getItem("hideChatKey");
        showLeaderboardBox.innerText = localStorage.getItem("showLeaderboardKey");
        hideLeaderboardBox.innerText = localStorage.getItem("hideLeaderboardKey");
        showHudBox.innerText = localStorage.getItem("showHudKey");
        hideHudBox.innerText = localStorage.getItem("hideHudKey");
        showMinimapBox.innerText = localStorage.getItem("showMinimapKey");
        hideMinimapBox.innerText = localStorage.getItem("hideMinimapKey");
        showTimeBox.innerText = localStorage.getItem("showTimeKey");
        hideTimeBox.innerText = localStorage.getItem("hideTimeKey");
    }, []);
    setTimeout(() => {
        console.clear()
    }, 1000)
    return (
        <div className={Style.Keybinds} id={Style.SettingsList}>
            <h2>Keybinds Settings</h2>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Feed Macro
                </div>
                <div tabIndex="0" value="W" id="FeedMacro" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Double Split
                </div>
                <div tabIndex="0" value="A" id="DoubleSplit" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                   Triple Split
                </div>
                <div tabIndex="0" value="Z" id="TripleSplit" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    16x Split
                </div>
                <div tabIndex="0" value="D" id="SixteenSplit" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Stop Moving
                </div>
                <div tabIndex="0" value="S" id="StopMoving" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Stop Lock
                </div>
                <div tabIndex="0" value="L" id="StopMovingLock" className={Style.MacroBox}><b></b></div>
            </div>

            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Show Chat
                </div>
                <div tabIndex="0" value="P" id="ShowChat" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Hide Chat
                </div>
                <div tabIndex="0" value="L" id="HideChat" className={Style.MacroBox}><b></b></div>
            </div>

            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Show Leaderboard
                </div>
                <div tabIndex="0" value="L" id="ShowLeaderboard" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Hide Leaderboard
                </div>
                <div tabIndex="0" value="J" id="HideLeaderboard" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Show HUD
                </div>
                <div tabIndex="0" value="L" id="ShowHUD" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Hide HUD
                </div>
                <div tabIndex="0" value="L" id="HideHUD" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Show Minimap
                </div>
                <div tabIndex="0" value="L" id="ShowMinimap" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Hide Minimap
                </div>
                <div tabIndex="0" value="L" id="HideMinimap" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Show Time
                </div>
                <div tabIndex="0" value="L" id="ShowTime" className={Style.MacroBox}><b></b></div>
            </div>
            <div className={Style.KeyCard}>
                <div id={Style.KeyName}>
                    Hide Time
                </div>
                <div tabIndex="0" value="L" id="HideTime" className={Style.MacroBox}><b></b></div>
            </div>
        </div>
    )
}

export { Keybinds }


/*
<tr className={Style.keychange}><td>Key</td><td>Change</td></tr>
                        <tr className={Style.controlseparator}><td></td><td></td></tr>
                        <tr className="controlrow" id={Style.KeyCard} ><td id={Style.KeyName}>Feed</td><td keycode="doubleSplitKey"><div tabIndex="0" value="W" id="FeedMacro" className={Style.MacroBox}><b>W</b></div></td></tr>
		                <tr className="controlrow" id={Style.KeyCard} ><td id={Style.KeyName}>Doublesplit</td><td keycode="doubleSplitKey"><div tabIndex="0" value="A" id="DoubleSplit" className={Style.MacroBox}><b>A</b></div></td></tr>
                        <tr className="controlrow" id={Style.KeyCard} ><td id={Style.KeyName}>Triplesplit</td><td keycode="tripleSplitKey"><div tabIndex="0" value="Z" id="TripleSplit" className={Style.MacroBox}><b>Z</b></div></td></tr>
		                <tr className="controlrow" id={Style.KeyCard} ><td id={Style.KeyName}>16X</td><td keycode="sixteenSplitKey"><div tabIndex="0" value="D" id="SixteenSplit" className={Style.MacroBox}><b>D</b></div></td></tr>
		                <tr className="controlrow" id={Style.KeyCard} ><td id={Style.KeyName}>Stop moving</td><td keycode="doubleSplitKey"><div tabIndex="0" value="S" id="StopMoving" className={Style.MacroBox}><b>S</b></div></td></tr>
                    */