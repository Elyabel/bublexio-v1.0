import Profile from '../../../StylesSheets/ProfileModal.css';
import Left from '../../../StylesSheets/LeftPanel.css';
import Main from '../../../StylesSheets/MainPanel.css';
import LB from '../../../StylesSheets/LeftBottomPanel.css';
import Right from '../../../StylesSheets/RightPanel.css';
import Game from '../../../StylesSheets/game.css';
import React from 'react';

import $ from 'jquery';
import Swal from 'sweetalert2';

const ProfileModal = () => {
    function CloseProfileModal() {
        $(`#${Profile.Modal}`).fadeOut(250);
        $(`.${Left.LeftContent}, .${Main.MainContent}, .${Right.RightContent}, .${LB.LeftBottomContent}`).fadeTo("slow", 1);
    }
    function Soon() {
        new Swal({
            title: 'Coming soon...',
            icon: 'info',
            customClass: {
                popup: 'SwalPopupDark'
            }
        })
    }
    return (
        <div id={Profile.Modal} style={{display: "none"}}>
            <button className={Profile.closeButton} onClick={CloseProfileModal}><i className="fa-solid fa-xmark"></i></button>
            <div className={Profile.Title}><strong><h3>Profile</h3></strong></div>
            <div className={Profile.Content}>
                <div className={Profile.Col1}>
                    <label className={Profile.userInfo}>
                        <strong>ID: </strong>
                        <div className={Profile.userData}>
                            <p id="userid">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Username: </strong>
                        <div className={Profile.userData}>
                            <p id="userusername">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Discord ID: </strong>
                        <div className={Profile.userData}>
                            <p id="userdiscordid">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Coins: </strong>
                        <div className={Profile.userData}>
                            <p id="usercoins">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>XP: </strong>
                        <div className={Profile.userData}>
                            <p id="userxp">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Current Level: </strong>
                        <div className={Profile.userData}>
                            <p id="usercurrentlvl">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Next Level: </strong>
                        <div className={Profile.userData}>
                            <p id="usernextlvl">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Wins: </strong>
                        <div className={Profile.userData}>
                            <p id="userwins">null</p>
                        </div>
                    </label>
                    <label className={Profile.userInfo}>
                        <strong>Games Played: </strong>
                        <div className={Profile.userData}>
                            <p id="usergameplayed">null</p>
                        </div>
                    </label>
                </div>

                <div className={Profile.claiminstruction}>
                    <h4>Claim 50 coins every 24 hours!</h4>
                    <button id={Profile.freeCoins} onClick={Soon}>Claim coins</button>
                </div>

            </div>
        </div>
    );
}

export { ProfileModal }