import Acc from '../../StylesSheets/Account.css';
import '../../StylesSheets/game.css';
import Profile from '../../StylesSheets/ProfileModal.css';
import React from 'react';
import Swal from 'sweetalert2';
import $ from 'jquery';
import { API } from '../../Client/API';

const Account = () => {
    function OpenProfileModal() {
        if(!API.isLoggedIn) return new Swal({
            icon: 'error',
            title: "You are not authenticated.",
            text: "Please login.",
            customClass: {
                popup: 'SwalPopupDark'
            }
        })
        $(`#${Profile.Modal}`).fadeIn(250);
        
    }
    function Logout() {
        if(!API.isLoggedIn) return new Swal({
            icon: 'error',
            title: "You are not authenticated.",
            text: "Please login.",
            customClass: {
                popup: 'SwalPopupDark'
            }
        })
        API.LogoutUser();
    }
    return (
        <div className={Acc.AccountView}>
            <i onClick={Logout} id={Acc.LogoutButton} className="fa-solid fa-arrow-right-from-bracket"></i>
            <div className={Acc.Col1}>
                <div className={Acc.ProfilePicture}>
                    
                    <img id="profileAvatar" alt="profilepicture" />
                    <div id="profileiconnnn" onClick={OpenProfileModal}><i className="fa-regular fa-user"></i></div>
                </div>
                <div className={Acc.UserInfo}>
                    <p className={Acc.username} id="profileUsername"></p>
                    <p className={Acc.coins} id="profileCoins">Coins</p>
                </div>
            </div>
            <div className={Acc.Col2}>
                <div className={Acc.LevelNumber}>
                    <p id="profileActualLevel">Level </p>
                    <p className={Acc.Lvl2} id="profileNextLevel">Level </p>
                </div>
                
            </div>
            <div className={Acc.XpBar}>
                <p className={Acc.XpCount} id="profileXpCount"></p>
                <div id="progress" className={Acc.ProgressBar}></div>
            </div>
        </div>
    );
}

export { Account }