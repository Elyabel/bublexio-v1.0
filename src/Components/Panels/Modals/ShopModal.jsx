import Shop from '../../../StylesSheets/ShopModal.css';
import React from 'react';

import $ from 'jquery';
import { ShopCoinsTab } from '../../Shop/Coins';
import { SkinsCoinsTab } from '../../Shop/Skins';
import { PerksCoinsTab } from '../../Shop/Perks';


const ShopModal = () => {
    function CloseShopModal() {
        $(`.shop`).fadeOut(250);
    }

    function OpenCoinsTab() {
        $("#Coins").addClass(`${Shop.active}`);
        $("#Shop").removeClass(`${Shop.active}`);
        $("#Perks").removeClass(`${Shop.active}`);
        $("#Coinstab").show();
        $("#Skinstab").hide();
        $("#Perkstab").hide();
    }
    function OpenSkinsTab() {
        $("#Coins").removeClass(`${Shop.active}`);
        $("#Shop").addClass(`${Shop.active}`);
        $("#Perks").removeClass(`${Shop.active}`);
        $("#Coinstab").hide();
        $("#Skinstab").show();
        $("#Perkstab").hide();
    }
    function OpenPerksTab() {
        $("#Coins").removeClass(`${Shop.active}`);
        $("#Shop").removeClass(`${Shop.active}`);
        $("#Perks").addClass(`${Shop.active}`);
        $("#Coinstab").hide();
        $("#Skinstab").hide();
        $("#Perkstab").show();
    }

    return (
        <div id={Shop.Modal} className='shop' style={{display: "none"}}>
            <button className={Shop.closeButton} onClick={CloseShopModal}><i className="fa-solid fa-xmark"></i></button> 

            <div className={Shop.NavBar}>
                <button id="Coins" onClick={OpenCoinsTab} className={Shop.NavBarBtn}>Coins</button>
                <button id="Shop" onClick={OpenSkinsTab} className={`${Shop.NavBarBtn} ${Shop.active}`}>Skins</button>
                <button id="Perks" onClick={OpenPerksTab} className={Shop.NavBarBtn}>Perks</button>
            </div>

            <div className={Shop.Content}>
                <div id="Coinstab" style={{display: "none"}}>
                    <ShopCoinsTab />
                </div>
                <div id="Skinstab">
                    <SkinsCoinsTab />
                </div>
                <div id="Perkstab" style={{display: "none"}}>
                    <PerksCoinsTab />
                </div>
            </div>
        </div>
    );
}

export { ShopModal }