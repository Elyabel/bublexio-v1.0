import $ from 'jquery';

export class Leaderboard {
    static create = Object.create({
        type: null,
        items: null,
        canvas: document.createElement('canvas'),
        teams: ['#F33', '#3F3', '#33F']
    });

    static drawLeaderboard() {
        let last = 0;
        $("#lb_detail").html('');
        for (let i = 0; i < this.create.items.length; i++) {
            last++;
            if (this.create.items[i].me === true) {

                        $("#lb_detail").append(`<div style="color:#faa">${last}. ${this.create.items[i].name}</div>`);
            } else {
                $("#lb_detail").append(`<div>${last}. ${this.create.items[i].name}</div>`);
            }
        }
    }
}