import Right from '../../StylesSheets/RightPanel.css';
import $ from 'jquery';
import { Bublex } from '../../Components/Core/Network/Socket';

export class Server {
    static baseURL = 'https://servers.bublex.io'
    static fetchServers() {
        fetch(`${Server.baseURL}/servers`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            
            setTimeout(() => {
                $("#serversList").empty();
                for (let i = 0; i < data.length; i++) {
                    
                    let buttonServer = document.createElement("button");
                    let serverplayers = document.createElement("div");

                    buttonServer.setAttribute("class", `${Right.serverAccordion}`);
                    buttonServer.innerText = `${data[i].gamemode}`;

                    serverplayers.setAttribute("class", `${Right.serverPlayers}`);
                    serverplayers.innerText = `${data[i].players}`;

                    buttonServer.onclick = function(url) {
                        
                        Bublex.connect(data[i].ip);
                    }

                    buttonServer.appendChild(serverplayers)

                    let serversList = document.getElementById("serversList")
                    serversList.appendChild(buttonServer)
                }
            }, 1000)
        })
    }
}

/*
<button className={Right.serverAccordion}>ULTRA SPLIT</button>
            <div className={Right.Gamemodepanel}>
            <button id="ultrasplit1">1</button>
            </div>
            */