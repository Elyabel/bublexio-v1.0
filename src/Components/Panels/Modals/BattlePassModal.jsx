import React from 'react';
import Pass from '../../../StylesSheets/BattlePassModal.css';
import Shop from '../../../StylesSheets/ShopModal.css';

import $ from 'jquery';
import Swal from 'sweetalert2';

const BattlePassModal = () => {
    function CloseBattlePassModal() {
        $(`#${Pass.Modal}`).fadeOut(250);
        document.getElementById("hud").style.display = "block";
    }
    function showSkins() {

    }
    return (
        <div id={Pass.Modal} style={{display: "none"}}>
            <button className={Pass.closeButton} onClick={CloseBattlePassModal}><i className="fa-solid fa-xmark"></i></button>
            <div className={Pass.GeneralInformation}>
                <img src='/images/BattlePass.png' id={Pass.battlePassImage} />
                <div className={Pass.BattlePassDescription}>
                    <p>Battle Pass Season 1</p>
                    <p>100 Tiers</p>
                    <p>End: June 5, 2022.</p>
                </div>
                <div className={Pass.SeparateLine}></div>
                <div className={Pass.BattlePassUserInformation}>
                   <img src='/images/tier.png' id={Pass.tierImage} /> <p id="usertier"></p><p id="profileActualLevelBattlePass" style={{marginTop: "0px"}}>Level </p>
                </div>
                <div className={Pass.SeparateLine2}></div>
                <div className={Pass.BattlePassInformation}>
                   <p>In the Battle Pass you will earn coins, xp, skins! Battle Pass skins are available at levels 20, 40, 60, 80 and 100!
                      ALL skins are TOTALLY exclusive and will NEVER be back ! You want to claim a tier ? simply level up (+1 level = 1 tier unlocked).
                   </p>
                </div>
                <div className={Pass.BattlePassTiers}>
                    <div id="tierslist" className={Pass.BattlePassList}>

                        <div id={Pass.Tier}>
                            <div className={Pass.passCardNumber}>1</div>
                            <div className={Pass.passCardDescription}>
                                <div className={Pass.tierCardName}>5 XP</div>
                                <button className={Pass.infoButton} onClick={showSkins}><i className="fa-solid fa-circle-info"></i></button>
                                <button className={Pass.ClaimTierButton}>Claim</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { BattlePassModal }