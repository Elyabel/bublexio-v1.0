import { Variables } from "../Game/Variables";
import { Functions } from "../Game/Functions";
import { Logger } from "./Logger";
import $ from 'jquery';
import Swal from 'sweetalert2';
import { Writer } from "./Writer";
import { Reader } from "./Reader";
import { Settings } from "../Settings";
import { Color } from "../Player/Color";
import { Cells, Border, Leaderboard, Chat, Stats } from "../World";
import { PlayerCamera } from "../Player/Camera";
import { Cell } from "../Player/Cell";
import { Camera } from "../Game/Camera";
import { Player } from "../Player";

export class Bublex {
    static wsSend(data) {
        if (!Variables.ws) return;
        if (Variables.ws.readyState !== 1) return;
        if (data.build) Variables.ws.send(data.build());
        else Variables.ws.send(data);
    }

    static gameReset() {
        Functions.cleanupObject(Cells.Variable);
        Functions.cleanupObject(Border.draw);
        Functions.cleanupObject(Leaderboard.create);
        Functions.cleanupObject(Chat.create);
        Functions.cleanupObject(Stats.create);
        Chat.create.messages = [];
        Leaderboard.create.items = [];
        Cells.Variable.mine = [];
        Cells.Variable.byId = {};
        Cells.Variable.list = [];
        PlayerCamera.camera.x = PlayerCamera.camera.y = PlayerCamera.camera.target.x = PlayerCamera.camera.target.y = 0;
        PlayerCamera.camera.scale = PlayerCamera.camera.target.scale = 1;
        Variables.mapCenterSet = false;
    }

    static wsCleanup() {
        let API;
        if (!Variables.ws) return;
      //  API.setUser();
        Functions.showESCOverlay()
        Logger.debug('WebSocket cleanup');
        $("#chat-messages").html('');
        $(".lb_title").html('Leaderboard')
        Variables.ws.onopen = null;
        Variables.ws.onmessage = null;
        Variables.ws.close();
        Variables.ws = null;
        while (Variables.cellContainer.children[0]) {
            Variables.cellContainer.removeChild(Variables.cellContainer.children[0]);
        }
    }

    static async connect(url) {
        if (Variables.ws) {
            Logger.debug('WebSocket init on existing connection');
            Bublex.wsCleanup();
        }
        Variables.wsUrl = url;
        Variables.ws = new WebSocket(`ws${Variables.USE_HTTPS ? 's' : ''}://${url}`);
        Variables.ws.binaryType = 'arraybuffer';
        Variables.ws.onopen = this.wsOpen;
        Variables.ws.onmessage = this.wsMessage;
        Variables.ws.onerror = this.wsError;
        Variables.ws.onclose = this.wsClose;

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'SwalPopupDark',
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: 'Reconnecting to server.'
          })
    }

    static async wsOpen() {
        Variables.disconnectDelay = 1000;

        const token = localStorage.getItem("bublex-token")

        Bublex.wsSend(Variables.SEND_254);
        Bublex.wsSend(Variables.SEND_255);

        if(token) {
            const writer = new Writer(true);
        writer.setUint8(0x65);
        writer.setStringUTF8(token);
        //console.log(token);
       // console.log(writer);
        Bublex.wsSend(writer);
        } else {
            console.log("no token found")
        }
        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'SwalPopupDark',
            },
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Connected to server.'
          })
    }

    static wsError(error) {
        Logger.warn(error);
    }

    static async wsClose(e) {
        if (e.currentTarget !== Variables.ws) return;
        Logger.debug(`WebSocket disconnected ${e.code} (${e.reason})`);
        Bublex.wsCleanup();
        Bublex.gameReset();
        setTimeout(function() {
            if (Variables.ws && Variables.ws.readyState === 1) return;
            Bublex.connect(Variables.wsUrl);
        }, Variables.disconnectDelay *= 1);
        $(".lb_title").html('Leaderboard')

        const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'SwalPopupDark',
            },
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Disconnected to server.'
          })
    }

    static async wsMessage(data) {
        Variables.syncUpdStamp = Date.now();
        const reader = new Reader(new DataView(data.data), 0, true);
        const packetId = reader.getUint8();
        switch (packetId) {
            case 0x10: { // update nodes
                // consume records
                let killed, killer, count;
                count = reader.getUint16();
                for (var i = 0; i < count; i++) {
                    killer = reader.getUint32();
                    killed = reader.getUint32();
                    if (!Cells.Variable.byId.hasOwnProperty(killer) || !Cells.Variable.byId.hasOwnProperty(killed))
                        continue;



                        Cells.Variable.byId[killed].destroy(killer);
                }

                // update records
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    const id = reader.getUint32();
                    if (id === 0) break;

                    const x = reader.getInt32();
                    const y = reader.getInt32();
                    const s = reader.getUint16();






                    const flagMask = reader.getUint8();
                    const flags = {
                        updColor: !!(flagMask & 0x02),
                        updSkin: !!(flagMask & 0x04),
                        updName: !!(flagMask & 0x08),
                        updBame: !!(flagMask & 0x40),
                        jagged: !!(flagMask & 0x01) || !!(flagMask & 0x10),
                        ejected: !!(flagMask & 0x20),
                    };

                    const color = flags.updColor ? new Color(reader.getUint8(), reader.getUint8(), reader.getUint8()) : null;
                    const skin = flags.updSkin ? reader.getStringUTF8() : null;
                    const name = flags.updName ? reader.getStringUTF8() : null;
                    if (Cells.Variable.byId.hasOwnProperty(id)) {
                        const cell = Cells.Variable.byId[id];
                        cell.update(Variables.syncUpdStamp);
                        cell.updated = Variables.syncUpdStamp;
                        cell.ox = cell.x;
                        cell.oy = cell.y;
                        cell.os = cell.s;
                        cell.nx = x;
                        cell.ny = y;
                        cell.ns = s;
                        if (color) cell.setColor(color);
                        if (name) cell.setName(name);
                        if (skin) cell.setSkin(skin);
                        cell.drawTick();
                    } else {
                        const cell = new Cell(id, x, y, s, name, color, skin, flags);
                        Cells.Variable.byId[id] = cell;
                        Cells.Variable.list.push(cell);
                    }
                }
                // dissapear records
                count = reader.getUint16();
                for (i = 0; i < count; i++) {
                    killed = reader.getUint32();
                    if (Cells.Variable.byId.hasOwnProperty(killed) && !Cells.Variable.byId[killed].destroyed) {
                        Cells.Variable.byId[killed].destroy(null);
                    }
                }
                break;
            }
            case 0x11: { // update pos
                PlayerCamera.camera.target.x = reader.getFloat32();
                PlayerCamera.camera.target.y = reader.getFloat32();
                PlayerCamera.camera.target.scale = reader.getFloat32();
                PlayerCamera.camera.target.scale *= PlayerCamera.camera.viewportScale;
                PlayerCamera.camera.target.scale *= PlayerCamera.camera.userZoom;
                break;
            }
            case 0x12: { // clear all
                /* eslint-disable-next-line */
                for (var i in Cells.Variable.byId)
                Cells.Variable.byId[i].destroy(null);
                break;
            }
            case 0x14: { // clear my cells
                Cells.Variable.mine = [];
                break;
            }
            case 0x15: { // draw line
                Logger.warn('got packet 0x15 (draw line) which is unsupported');
                break;
            }
            case 0x20: { // new cell
                Cells.Variable.mine.push(reader.getUint32());
				
				
				

                break;
            }
            case 0x30: { // text list
                Leaderboard.create.items = [];
                Leaderboard.create.type = 'text';

                const lbCount = reader.getUint32();
                for (let i = 0; i < lbCount; ++i) {
                    Leaderboard.create.items.push(reader.getStringUTF8());
                }
              //  if(Settings.Options.showLeaderboard) {
                    Leaderboard.drawLeaderboard()
             //   }
                break;
            }
            case 0x31: { // ffa list
                Leaderboard.create.items = [];
                Leaderboard.create.type = 'ffa';

                const count = reader.getUint32();
                for (let i = 0; i < count; ++i) {
                    const isMe = !!reader.getUint32();
                    const lbName = reader.getStringUTF8();
                    Leaderboard.create.items.push({
                        me: isMe,
                        name: Cell.parseName(lbName).name ? Functions.escapeHtml(Cell.parseName(lbName).name) : Variables.EMPTY_NAME
                    });
                }
              //  if(Settings.Options.showLeaderboard) {
                    Leaderboard.drawLeaderboard()  
             //   }
                break;
            }
            case 0x32: { // pie chart
                Leaderboard.create.create.items = [];
                Leaderboard.create.create.type = 'pie';

                const teamsCount = reader.getUint32();
                for (let i = 0; i < teamsCount; ++i) {
                    Leaderboard.create.create.items.push(reader.getFloat32());
                }
              //  if(Settings.Options.showLeaderboard) {
                    Leaderboard.drawLeaderboard()  
              //  }
                break;
            }
            case 0x40: { // set border
                Border.draw.left = reader.getFloat64();
                Border.draw.top = reader.getFloat64();
                Border.draw.right = reader.getFloat64();
                Border.draw.bottom = reader.getFloat64();
                Border.draw.width = Border.draw.right - Border.draw.left;
                Border.draw.height = Border.draw.bottom - Border.draw.top;
                Border.draw.centerX = (Border.draw.left + Border.draw.right) / 2;
                Border.draw.centerY = (Border.draw.top + Border.draw.bottom) / 2;

                if (data.data.byteLength === 33) break;
                if (!Variables.mapCenterSet) {
                    Variables.mapCenterSet = true;
                    PlayerCamera.camera.x = PlayerCamera.camera.target.x = Border.draw.centerX;
                    PlayerCamera.camera.y = PlayerCamera.camera.target.y = Border.draw.centerY;
                    PlayerCamera.camera.scale = PlayerCamera.camera.target.scale = 1;
                }
                break;
            }
            case 0x63: { // chat message
                const flagMask = reader.getUint8();
                const flags = {
                    server: !!(flagMask & 0x80),
                    admin: !!(flagMask & 0x40),
                    mod: !!(flagMask & 0x20),
                };
                const color = new Color(reader.getUint8(), reader.getUint8(), reader.getUint8());
                const rawName = reader.getStringUTF8();
                const message = reader.getStringUTF8();

                let name = Cell.parseName(rawName).name ? Functions.escapeHtml(Cell.parseName(rawName).name) : Variables.EMPTY_NAME;

                if (flags.server && name !== 'ServerCHAT') name = ` ${name}`;
                if (flags.admin) name = `[ADMIN] ${name}`;
                if (flags.mod) name = `[DEV] ${name}`;

                const wait = Math.max(3000, 1000 + message.length * 150);
                Chat.create.waitUntil = Variables.syncUpdStamp - Chat.create.waitUntil > 100 ? Variables.syncUpdStamp + wait : Chat.create.waitUntil + wait;
                Chat.create.messages.push({
                    color,
                    name,
                    message,
                    time: Variables.syncUpdStamp,
                    server: flags.server,
                    admin: flags.admin,
                    mod: flags.mod,
                });
                (function() {
                    $("#chat-messages").append(`
                        <div>
                            <span style="color:rgb(${color.r}, ${color.g}, ${color.b})" class="sender">${Functions.escapeHtml(name)}</span>: <span class="msg">${Functions.escapeHtml(message)}</span>
                        </div>
                    `)  
                    if (parseInt($("#chat-messages").css('height')) >= 150) {
                        $("#chat-messages").css('overflow-y', 'auto').animate({
                            scrollTop: 100000 * 100000
                        }, 2000);
                    } else return $("#chat-messages").css('overflow-y', 'none');
                })(name, message, color);
                break;
            }
            
            default:
                break;
        }

    }

    static drawGame() {
        Stats.create.fps += (1000 / Math.max(Date.now() - Variables.syncAppStamp, 1) - Stats.create.fps) / 10;
           Variables.syncAppStamp = Date.now();
           if (Settings.Options.showMinimap) {
               Variables.mapsector.alpha = 1;
               Variables.mapsquare.alpha = 1;
               Variables.mapplayer.alpha = 1;
           } else {
               Variables.mapsector.alpha = 0;
               Variables.mapsquare.alpha = 0;
               Variables.mapplayer.alpha = 0;
           }
   
               Variables.application.renderer.backgroundColor = `0x${localStorage.getItem("backgroundColor")}`;
               window.gridcolor = 0xffffff;
               // draw.clear();
               // bground.clear();
               // borderDraw.clear();
               window.gridDrew = false;
   
           for (const cell of Cells.Variable.list) cell.update(Variables.syncAppStamp);
           Camera.cameraUpdate();
           for (const cell of Cells.Variable.list) cell.updatePlayerPosition();
           if (Settings.Options.showMinimap) Player.clearPlayers();
           Functions.drawGrid();
       }
}