import TM from '../../../StylesSheets/TopModal.css';
import Left from '../../../StylesSheets/LeftPanel.css';
import Main from '../../../StylesSheets/MainPanel.css';
import LB from '../../../StylesSheets/LeftBottomPanel.css';
import Right from '../../../StylesSheets/RightPanel.css';
import React from 'react';

import $ from 'jquery';

const TopModal = () => {
    function CloseTopModal() {
        $(`#${TM.Modal}`).fadeOut(250);
        $(`.${Left.LeftContent}, .${Main.MainContent}, .${Right.RightContent}, .${LB.LeftBottomContent}`).fadeTo("slow", 1);
    }
    return (
        <div id={TM.Modal} style={{display: "none"}}>
            <button className={TM.closeButton} onClick={CloseTopModal}><i className="fa-solid fa-xmark"></i></button>
            <div className={TM.Content}>
                <h3>Top Levels</h3>
                <div className={TM.Leaderboard} id="leaderboardtop">
                    
                </div>
            </div>
        </div>
    );
}

export { TopModal }