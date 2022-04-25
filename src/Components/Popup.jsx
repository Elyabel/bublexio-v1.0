import Style from '../StylesSheets/Popup.css';
import React from 'react';
import $ from 'jquery';
import { BattlePass } from '../Client/API/BattlePass';

const Popup = () => {
    function closePopup() {
        $(`.${Style.popupModal}`).fadeOut(200)
    }
    function openBattlePassVideo() {
        document.getElementById("videoBattlePass").style.display = "block";
        setTimeout(() => {
            document.getElementById("video").style.display = "block";
        }, 380)
    }
    function closeBattlePassVideo() {
        document.getElementById("videoBattlePass").style.display = "none";
    }
    return (
        <div className={Style.popupModal}>
            <button className={Style.videoButton} onClick={openBattlePassVideo}>View Battle Pass Video</button>
            <button className={Style.closeButton} onClick={closePopup}><i className="fa-solid fa-xmark"></i></button>
            <div style={{marginTop: '22px'}}>
                <img src='/images/Bpass.jpg' alt='bpassimage' />
                <button className={Style.buy1} onClick={() => BattlePass.buyBattlePass()}>Buy</button>
                <button className={Style.buy2}>Coming Soon</button>
            </div> 
            <div id="videoBattlePass" className={Style.videoContainer} style={{display: "none"}}>
            <button className={Style.closevideoButton} onClick={closeBattlePassVideo}><i className="fa-solid fa-xmark"></i></button>
                <video style={{display: "none"}} id="video" onEnded={closeBattlePassVideo} src="/news/bublex-battle-pass.mp4" width="600" height="300" controls="controls" />
            </div>
        </div>
    )
}

export { Popup }