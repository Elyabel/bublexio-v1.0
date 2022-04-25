import Right from '../../StylesSheets/RightPanel.css';
import React from 'react';

import $ from 'jquery';
import { useEffect } from 'react';
import { Server } from '../../Client/API/Servers';
import { Bublex } from '../Core/Network/Socket';

const ServersView = () => {

    function ConnectToUltrasplit() {
        Bublex.connect('127.0.0.1:7251');
    }

    return (
        <div id={Right.ServerView}>
            
            <div id="serversList">
            <button onClick={ConnectToUltrasplit} className={Right.serverAccordion}>PORT 7251</button>
            </div>

        </div>
    );
}

export { ServersView }