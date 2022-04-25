import $ from 'jquery'

export class Stats {
    static create = Object.create({
        fps: 0,
        latency: NaN,
        supports: null,
        info: null,
        pingLoopId: NaN,
        pingLoopStamp: null,
        canvas: document.createElement('canvas'),
        visible: false,
        score: NaN,
        maxScore: 0
    });

    static drawStats() {
        var string = [];
        if (0 !== Stats.create.score) {
            string.push("Score: " + (Stats.create.score));

        }
        if (0 < string.length) {
            if (!$(".stats").is(":visible")) {
                $(".stats").show();
            }
           document.getElementsByClassName("stats").innerHTML = string.join("&nbsp;&nbsp;&nbsp;").trim();
           $('.stats-mass').text(!isNaN(Stats.create.score) ? ('Mass: ' + (Stats.create.score) + '') : '');
           $('.stats-fps').text(('FPS: ' + ~~Stats.create.fps + ''));
        } else {
            $(".stats").hide();
        }
        setTimeout(Stats.drawStats, 500);
    }
}