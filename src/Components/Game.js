import GE from '../StylesSheets/Games.css';
import React from 'react';

//import '../Client/Client'

import { MainPanel } from './Panels/MainPanel';
import { SettingsModal } from './Panels/Modals/SettingsModal';
import { ShopModal } from './Panels/Modals/ShopModal';
import { TopModal } from './Panels/Modals/TopModal';
import { RightPanel } from './Panels/RightPanel';

import '../StylesSheets/game.css';
import { ProfileModal } from './Panels/Modals/ProfileModal';
import { VirusModal } from './Panels/Modals/VirusModal';
import { Server } from '../Client/API/Servers';
import { useEffect } from 'react';
import $ from 'jquery'
import { Bublex } from './Core/Network/Socket';
import { BattlePassModal } from './Panels/Modals/BattlePassModal';
import { Popup } from './Popup';
import { FriendsModal } from './Panels/Modals/FriendsModal';

function Game() {
    let API;
   // API.fetchProfileData();
   // Server.fetchServers();
   // API.fetchOwnedPerks();
    
    useEffect(() => {
        $("body").on("keydown",  function (e) {
            if (e && e.keyCode === 9) {
                
                e.preventDefault();
            }
        });

        if(!localStorage.getItem("cellColor")) {
            localStorage.setItem("cellColor", "1472ff")
        }

        if(!localStorage.getItem("cellborderColor")) {
            localStorage.setItem("cellborderColor", "1472ff")
        }

        if(!localStorage.getItem("backgroundColor")) {
            localStorage.setItem("backgroundColor", "171717")
        }

        if(!localStorage.getItem("bordersColor")) {
            localStorage.setItem("bordersColor", "ffffff")
        }
        
        localStorage.removeItem("token")
        localStorage.removeItem("bublex-token-gameserver")
        localStorage.removeItem("bublex-gameserver-token")
        localStorage.removeItem("gameserver-bublex-token")

        if(localStorage.getItem("bublex-token")) {
            API.loginUsingToken();
           // console.log("token found")
        } else {
           // console.log("token not found")
        }

    }, [])
       // Bublex.connect('127.0.0.1:7251');
           // Bublex.connect('proxy.bublex.io/ultrasplit');
         //  Bublex.connect('82.66.73.40:7100')

    return (
        <div id={GE.Game} className='gameOverlay'>
            <div id="Overlay">
            <div id={GE.GamePanels}>
                <div className={GE.bublexLogo}><img src="./images/Logo.png" alt="logo"></img></div>
                <MainPanel />
                <RightPanel />
                <ShopModal />
                <TopModal />
                <SettingsModal />
                <ProfileModal />
                <VirusModal />
                <BattlePassModal />
                <Popup />
                <FriendsModal />
            </div>
            </div>
        </div>
    );
}

export { Game }