import React, { useEffect, useState } from 'react';
import { Game } from './Components/Game';
import './StylesSheets/game.css';
import $ from 'jquery';
import { Loading } from './Components/Loading';

function App() {
  useEffect(() => {
    setInterval(() => {
      let dt = new Date();
      document.getElementById("datetime").innerHTML = dt.toLocaleString();
    }, 1000);
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
    document.getElementById("hud").style.display = "block"
  }, 1500)

  return (
    <div id="app">
      {isLoading ? <Loading /> : <Game />}
      <div id="hud" style={{display:"none"}}>
        <div id="leaderboard">
          <div className="lb_title">Leaderboard</div> 
          <div id="lb_detail"></div>
        </div>

        <div className="chat">
          <div className="chat-content">
              <b><div id="chat-messages"></div></b>
          </div>
            <input className="chat-input" id="chat_textbox" maxLength="200" placeholder="Type your message..." />
        </div>
        
        <div className="stats">
          <div className="stats-column">
            <b><li className="stats-row stats-mass"></li></b>
            <div className="stats-row spacestats">&nbsp; &nbsp;</div>
            <b><li className="stats-row stats-fps"></li></b>
          </div>
        </div>

        <div id="Time">
          <p id="datetime"></p>
        </div>
      </div>
      
      <div className="stoplock" id="stoplockscreen"></div>
      <canvas id="canvas" width="800" height="600"></canvas>
    </div>
  );
}

export default App;
