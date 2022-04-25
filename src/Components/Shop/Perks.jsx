import Shop from '../../StylesSheets/ShopModal.css';
import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import $ from 'jquery';

const PerksCoinsTab = () => {
    let API;
    return (
        <div id={Shop.PerksTab}>
            <Tabs>
                <TabList className={Shop.SkinsNavBar}>
                    <Tab>All</Tab>
                    <Tab>Owned</Tab>
                </TabList>

                <TabPanel className={Shop.skintab}>
                    <div id="allperk">
                        
                    </div>
                </TabPanel>

                <TabPanel className={Shop.skintab} style={{marginTop: "-370px"}}>
                    <div id="ownedperk">
                        
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export { PerksCoinsTab }