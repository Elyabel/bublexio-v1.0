import Shop from '../../StylesSheets/ShopModal.css';
import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import $ from 'jquery';

const SkinsCoinsTab = () => {
    let API;
    const [skinName, setSkinName] = useState("");
    const [skinUrl, setSkinUrl] = useState("");

    useEffect(() => {
        $("#customURL").on("input", function() {
            $(`.${Shop.CustomSkinView}`).css("background-image", `url(${$(this).val()})`)
        })
    }, []);

    function preventCustom() {
        
    }

    function sendCustomData() {
        const token = localStorage.getItem("bublex-token")
        Swal.fire({
            title: 'Are you sure you want to send this skin?',
            icon: 'warning',
            customClass: {
                popup: 'SwalPopupDark',
            },
            showCancelButton: true,
        /*    confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',*/
            confirmButtonText: 'Yes',
            canceluttonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
                $.post({
                    type: "POST",
                    url: `/skins/custom`,
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    data: {
                        skinName: skinName,
                        skinLink: skinUrl,
                    },
                    success: function(data) {
                        
                        new Swal({
                            title: data,
                            icon: "success",
                            customClass: {
                                popup: 'SwalPopupDark',
                            }
                        })
                    },
                    error: function(xhr) {
                         new Swal({
                             title: xhr.responseJSON.message,
                             icon: "error",
                             customClass: {
                                popup: 'SwalPopupDark',
                            }
                         })
                     },
                })
            }
          })
    }
    return (
        <div id={Shop.SkinsTab}>
            <Tabs>
                <TabList className={Shop.SkinsNavBar}>
                    <Tab >Premium</Tab>
                    <Tab >Free</Tab>
                    <Tab >Owned</Tab>
                    <Tab >Custom</Tab>
                </TabList>

                <TabPanel className={Shop.skintab}>
                    <div id="premiumskins">
                        
                    </div>
                </TabPanel>

                <TabPanel className={`${Shop.skintab} ${Shop.freeskinspanelstab}`} style={{marginTop: "-370px"}}>
                    <div id="freeskins">
                        
                    </div>
                </TabPanel>

                <TabPanel className={Shop.skintab} style={{marginTop: "-370px"}}>
                    <div id="ownedskins">
                        
                    </div>
                </TabPanel>
                <TabPanel className={Shop.skintab} style={{marginTop: "-370px"}}>
                    <div id="customskins">
                    <div className={Shop.CustomSkinView}></div>
                    <div className={Shop.CustomSkinForm}>
                        <input id="customName" type="text" placeholder="Custom skin name" maxLength="8" onChange={(e) => setSkinName(e.target.value)}></input>
                        <input id="customURL" type="text" placeholder="URL (imgur)" onChange={(e) => setSkinUrl(e.target.value)} ></input>
                        <button onClick={sendCustomData}>Send request 50k <i className="fa-solid fa-coins"></i></button>
                    </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export { SkinsCoinsTab }