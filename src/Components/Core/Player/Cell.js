import * as PIXI from 'pixi.js';
import { Variables } from '../Game/Variables';
import { Functions } from '../Game/Functions';
import { Settings } from '../Settings';
import { PlayerCamera } from './Camera';
import { Logger } from '../Network/Logger';
import { Cells } from '../World';
import { Color } from './Color';
import { GlowFilter } from 'pixi-filters';

export class Cell {
    static parseName(value) { // static method
        /* eslint-disable-next-line */
        let [, skin, name] = /^(?:\<([^}]*)\>)?([^]*)/.exec(value || '');
        name = name.trim();
        return {
            name: name,
            skin: (skin || '').trim() || name,
           // hat: (hat || '').trim() || name,
        };
    }
    constructor(id, x, y, s, name, color, skin, flags) {
        this.destroyed = false;
        this.diedBy = 0;
        this.nameSize = 0;
        this.updated = null;
        this.dead = null;
        this.id = id;
        this.ox = x;
        this.x = x;
        this.nx = x;
        this.oy = y;
        this.y = y;
        this.ny = y;
        this.os = s;
        this.s = s;
        this.ns = s;
        this.setColor(color);
        this.setName(name);
        this.setSkin(skin);
       // this.setHat(hat);
        this.jagged = flags.jagged;
        this.ejected = flags.ejected;
        this.born = Variables.syncUpdStamp;
        this.filter = new PIXI.filters.ColorMatrixFilter();
        this.draw();
        console.log(this.name);
    }
    destroy(killerId) {
        delete Cells.Variable.byId[this.id];
        if (Cells.Variable.mine.remove(this.id) && Cells.Variable.mine.length === 0) Functions.showESCOverlay();
        this.destroyed = true;
        this.dead = Variables.syncUpdStamp;
        if (killerId && !this.diedBy) {
            this.diedBy = killerId;
            this.updated = Variables.syncUpdStamp;
        }
    }
    update(relativeTime) {
        if (Cells.Variable.mine.length !== 0);
        let dt = (relativeTime - this.updated) / Settings.Options.animationDelay;
        dt = Math.max(Math.min(dt, 9), 0);

        if (this.destroyed && Date.now() > this.dead + 1) {
            Cells.Variable.list.remove(this);
            if (this.massContainer) {
                /* eslint-disable-next-line */
                return this.entity.destroy(), this.nameContainer.destroy(), this.massContainer.destroy();
            } else {
                return this.entity.destroy(); //, this.nameContainer.destroy();
            }
        } else if (this.diedBy && Cells.Variable.byId.hasOwnProperty(this.diedBy)) {
            this.nx = Cells.Variable.byId[this.diedBy].x;
            this.ny = Cells.Variable.byId[this.diedBy].y;
        }
        let dt2 = this.diedBy ? dt * dt : dt;
        this.x = this.ox + (this.nx - this.ox) * dt2;
        this.y = this.oy + (this.ny - this.oy) * dt2;
        this.s = this.os + (this.ns - this.os) * dt; 

       // this.nameSprite.scale.set(this.s / 300);

      //  this.nameSize = ~~(~~(Math.max(~~(0.3 * this.ns), 24)) / 3) * 3;
        //this.drawNameSize = ~~(~~(Math.max(~~(0.3 * this.s), 24)) / 3) * 3;

        if (this.destroyed) {
            this.entity.alpha = Math.max(140 - Date.now() + this.dead, 0) / 120;
            if (this.outContainer) this.outContainer.alpha = Math.max(120 - Date.now() + this.dead, 0) / 120;
        }
    }
    updatePlayerPosition() {
        if (this.nameSprite) {
            if (Settings.Options.showNames) {
                this.nameSprite.scale = new PIXI.Point(this.s / 200, this.s / 200);
                if (this.s * PlayerCamera.camera.scale > 30 && this.jagged !== true) {
                    this.nameSprite.alpha = 1;
                } else {
                    this.nameSprite.alpha = 0;
                }
            } else {
                this.nameSprite.scale = new PIXI.Point(this.s / 200, this.s / 200);
                this.nameSprite.alpha = 0;
            }
        }
        if (this.massSprite) {
            if (Settings.Options.showMass) {
                this.entity.removeChild(this.massSprite);
                this.massSprite = this.drawMass();
                let y = Math.max(this.s / 2, this.nameSize / 2);
                this.massSprite.scale = new PIXI.Point(this.s / 200, this.s / 200);
                this.massSprite.y = y;
                if (this.s * PlayerCamera.camera.scale > 30 && this.jagged !== true) {
                    this.massSprite.alpha = 1;
                } else {
                    this.massSprite.alpha = 0;
                }
                this.entity.addChild(this.massSprite);
            } else {
                this.massSprite.scale = new PIXI.Point(this.s / 200, this.s / 200);
                this.massSprite.alpha = 0;
            }
        }
        if (this.outSprite) {
            if (Settings.Options.cellBorders) {
                if (this.outSprite) {
                    this.outSprite.alpha = 1;
                    this.outSprite.width = this.outSprite.height = this.s * 2;
                    this.outSprite.scale = new PIXI.Point(this.s / 1000, this.s / 1000);
                } else {
                    this.outSprite = this.drawOutline();
                    this.entity.addChild(this.outSprite)
                }
            } else {
                this.outSprite.alpha = 0;
                this.outSprite.width = this.outSprite.height = this.s * 2;
                this.outSprite.scale = new PIXI.Point(this.s / 1000, this.s / 1000);
            }
        }
        if (this.entity) {
            this.entity.x = this.x;
            this.entity.y = this.y;
            this.entity.zIndex = this.os;
        }
        if (this.skinSprite) {
            this.skinSprite.width = this.skinSprite.height = this.s * 2;
        }
        if (this.cellSprite) {
            this.cellSprite.width = this.cellSprite.height = this.s * 2;
        }

    }
    drawTick() {}
    setName(rawName, value) {
        const {name, skin} = Cell.parseName(rawName);
        this.name = name;
        localStorage.setItem("nick", value)
        //this.setSkin(skin);
    }
    setSkin(value) {
        if (Settings.Options.showSkins) {
            this.skin = (value && value[0] === '%' ? value.slice(1) : value) || this.skin;
            if (this.skin === null || !Variables.knownSkins.has(this.skin) || Variables.loadedSkins.has(this.skin)) {
                return;
            }
            const skin = new Image();
            skin.crossOrigin = "anonymous";
            skin.src = `/skins/${this.skin}.png`;
            Variables.loadedSkins.set(this.skin, skin);
        }
    }

    setColor(value) {
        if (!value) {
            Logger.warn('Got no color');
            return;
        }
        this.color = value;
        this.sColor = Color.darker();
    }
    draw() {
        this.skinSprite = Settings.Options.showSkins && this.skin ? this.drawSkin() : null;
        this.cellSprite = this.drawCell();
        this.outSprite = this.drawOutline();

        this.entity = new PIXI.Container();

        if (this.skin && Settings.Options.showSkins) {
            this.entity.addChild(this.skinSprite);
            if (!this.jagged && this.s > 25 && !this.ejected) {
                this.entity.addChild(this.outSprite);
            }
        } else {
            this.entity.addChild(this.cellSprite);
            if (!this.jagged && this.s > 25 && !this.ejected) {
                this.entity.addChild(this.outSprite);
            }
        }
        if (this.name && Settings.Options.showNames) {
            this.nameSprite = this.drawName();
            this.nameSprite.scale = new PIXI.Point(this.s / 200, this.s / 200);
            this.entity.addChild(this.nameSprite);
        }
        if (this.name && Settings.Options.showMass) {
            this.massSprite = this.drawMass();
            this.massSprite.scale = new PIXI.Point(this.s / 200, this.s / 200);
            this.entity.addChild(this.massSprite);
        }
        this.entity.position.x = this.x;
        this.entity.position.y = this.y;
        Variables.cellContainer.addChild(this.entity);
    }
    drawOutline() {
        this.outSprite = new PIXI.Sprite(Variables.textures.Playerborder);
        this.outSprite.texture.baseTexture.mipmap = true;
        this.outSprite.anchor.set(.5);
        this.outSprite.width = this.outSprite.height = this.s * 2;
        this.outSprite.tint = `0x${localStorage.getItem("cellborderColor")}`;
        return this.outSprite;
    }
    drawCell() {
        this.colorhex = Color.toHex();
        if (this.jagged == true) {
            
            this.cellSprite = new PIXI.Sprite(Variables.textures.virus);
            this.cellSprite.texture.baseTexture.mipmap = true;
            this.cellSprite.anchor.set(.5);
            this.cellSprite.width = this.cellSprite.height = this.s * 2;
            this.cellSprite.tint = `0x${localStorage.getItem("virusColor")}`;
            return this.cellSprite;
            
        }
            if (this.ejected) {
                this.cellSprite = new PIXI.Sprite(Variables.textures.w);
                this.cellSprite.texture.baseTexture.mipmap = true;
                this.cellSprite.anchor.set(.5);
                this.cellSprite.width = this.cellSprite.height = this.s * 2;
                this.cellSprite.tint = `0x${localStorage.getItem("cellColor")}`;
                return this.cellSprite;
            } 
                this.cellSprite = new PIXI.Sprite(Variables.textures.cell);
                this.cellSprite.texture.baseTexture.mipmap = true;
                this.cellSprite.anchor.set(.5);
                this.cellSprite.width = this.cellSprite.height = this.s * 2;
                this.cellSprite.tint = `0x${localStorage.getItem("cellColor")}`;
                return this.cellSprite;
         //   }
      //  }
    }
    reDraw() {

        if (this.destroyed) return;
        this.entity.destroy();
        this.draw();
    }
    drawSkin() {
        if (this.skin.length <= 10) {
            var texture = this.drawSkinTexture(`/skins/${this.skin}.png`);
        } else {
            if (Settings.Options.showSkins) {
                 texture = this.drawSkinTexture(`/skins/${this.skin}.png`);
            } else {
                 texture = 'not_loaded';
            }
        }
        
        let isNonSkin = false;

        if (texture.then || texture === "not_loaded") {
            texture = Variables.textures.cell;
            isNonSkin = true;
        }

        var skinSprite = new PIXI.Sprite(texture);
        skinSprite.texture.baseTexture.mipmap = true;
        skinSprite.anchor.set(.5);
        skinSprite.width = skinSprite.height = this.s * 2;
        if (isNonSkin) skinSprite.tint = true ? (`0x${localStorage.getItem("cellColor")}` ? `0x${localStorage.getItem("cellColor")}` : '0xFFFFFF') : '0xFFFFFF'
        return skinSprite;
    }

    drawSkinTexture(image) {
        if (Variables.skinList[image]) {
            return Variables.skinList[image];
        } else {
            return new Promise(resolve => {
                let n = new Image();
                n.crossOrigin = "Anonymous";
                n.onload = () => {
                    let o = new PIXI.Texture(new PIXI.BaseTexture(n));
                    let skin = new PIXI.Graphics()
                        .beginTextureFill({
                            texture: o,
                            matrix: new PIXI.Matrix().scale(4, 4).translate(-1024, -1024),
                        })
                        .drawCircle(0, 0, 1024)
                        .endFill();
                    let texture = Variables.application.renderer.generateTexture(skin);
                    Variables.skinList[image] = texture;
                    this.reDraw();
                    resolve(texture);
                }
                n.onerror = function() {
                    Variables.skinList[image] = "not_loaded";
                }
                n.src = image;
            });
        }
    }
    
    drawMass() {
        const MassDate = (~~(this.s * this.s / 100));
        if (Variables.massList[MassDate]) {
            this.massSprite = new PIXI.Sprite(Variables.massList[MassDate])
            this.massSprite.anchor.set(.5);
            return this.massSprite;
        }
        this.style = {
            fontFamily: 'Ubuntu',
            fontWeight: 600,
            fontSize: 60,
            fill: 0xe0e0e0,
           // align: 'center',
            strokeThickness: 6,
        };
        let text = new PIXI.Text(Functions.prettyMass(MassDate), this.style);
       // text.resolution = 0.5;
        text.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        let texture = Variables.application.renderer.generateTexture(text);
        this.massSprite = new PIXI.Sprite(texture);
        this.massSprite.texture.baseTexture.mipmap = true;
        this.massSprite.anchor.set(.5);
     //   this.massSprite.resolution = 2;
        Variables.massList[MassDate] = texture;
        return this.massSprite;
    }
    drawName() {
        if (Variables.nickList[this.name]) {
            this.nameSprite = new PIXI.Sprite(Variables.nickList[this.name])
            this.nameSprite.anchor.set(.5);
            
            return this.nameSprite;
        }

            this.style = {
                fontFamily: 'Ubuntu',
                fontWeight: 600,
                fontSize: 60,
                fill: 0xffffff,
               // align: 'center',
                strokeThickness: 6,
            }

            this.colored = {
                fontFamily: 'Ubuntu',
                fontWeight: 600,
                fontSize: 60,
                fill: 0xfcba03,
               // align: 'center',
                strokeThickness: 6,
            }
        
        
        let text = new PIXI.Text(this.name, this.style);

     //   text.resolution = 1;
       // text.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        let texture = Variables.application.renderer.generateTexture(text);
        this.nameSprite = new PIXI.Sprite(texture);
        this.nameSprite.texture.baseTexture.mipmap = true;
        this.nameSprite.anchor.set(.5);
        text.zIndex = 3;
        
        Variables.nickList[this.name] = texture;
        return this.nameSprite;
    }
}