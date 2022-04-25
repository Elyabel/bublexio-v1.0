import Right from '../../StylesSheets/RightPanel.css';
import Panel from '../../StylesSheets/Panel.css';
import React from 'react';

//import { useEffect, useState } from 'react';

import { ServersView } from '../Servers/ServersView';
//import { ServersLoading } from '../Servers/ServersLoading';

const RightPanel = () => {
    return (
        <div id={Right.RightCol}>
            <div id={Panel.Panel} className={Right.RightContent}>
                <ServersView />
            </div>
        </div>
    );
}

export { RightPanel }