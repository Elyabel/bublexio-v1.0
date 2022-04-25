import Swal from "sweetalert2";
import Noty from 'noty';
import mojs from '@mojs/core'
import $ from 'jquery'

export class MsgPopUps {
    static showRegisterErrorMsg() {
        Swal.fire({
            title: "Error",
            text: "Verify your username/password and try again. if the problem persists, please contact DISCORD_USER#0000 on discord.",
            icon: "error"
        });
    }

    static showLoginErrorMsg() {
        Swal.fire({
            title: "Error",
            text: "Verify your username/password and try again. if the problem persists, please contact DISCORD_USER#0000 on discord.",
            icon: "error"
        });
    }

    static showSavedKeybindsNotification() {
        setTimeout(() => {
            $("#noty_layout__bottomRight").remove();
        }, 5000);
        new Noty({
            text: '<div class="text-left">Keybinds saved.</div>',
            type: 'success',
            theme: 'metroui',
            layout: 'bottomRight',
            closeWith: ['click'],
            timeout: 2000,
            animation: {
                speed: 500, // opening & closing animation speed
                open: function (promise) {
                    var n = this;
                    var Timeline = new mojs.Timeline();
                    var body = new mojs.Html({
                        el        : n.barDom,
                        x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                        isForce3d : true,
                        onComplete: function () {
                            promise(function(resolve) {
                                resolve();
                            })
                        }
                    });
        
                    var parent = new mojs.Shape({
                        parent: n.barDom,
                        width      : 200,
                        height     : n.barDom.getBoundingClientRect().height,
                        radius     : 0,
                        /* eslint-disable-next-line */
                        x          : {[150]: -150},
                        duration   : 1.2 * 500,
                        isShowStart: true
                    });
        
                    n.barDom.style['overflow'] = 'visible';
                    parent.el.style['overflow'] = 'hidden';
        
                    var burst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 10,
                        top     : n.barDom.getBoundingClientRect().height + 75,
                        degree  : 90,
                        radius  : 75,
                        angle   : {[-90]: 40},
                        children: {
                            fill     : '#88e85f',
                            delay    : 'stagger(500, -50)',
                            radius   : 'rand(8, 25)',
                            direction: -1,
                            isSwirl  : true
                        }
                    });
        
                    var fadeBurst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 2,
                        degree  : 0,
                        angle   : 75,
                        radius  : {0: 100},
                        top     : '90%',
                        children: {
                            fill     : '#88e85f',
                            pathScale: [.65, 1],
                            radius   : 'rand(12, 15)',
                            direction: [-1, 1],
                            delay    : .8 * 500,
                            isSwirl  : true
                        }
                    });
        
                    Timeline.add(body, burst, fadeBurst, parent);
                    Timeline.play();
                },
              close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                    
                }).play();
            }
            }
          }).show()
    }

    static showResetKeybindsNotification() {
        setTimeout(() => {
            $("#noty_layout__bottomRight").remove();
        }, 5000);
        new Noty({
            text: '<div class="text-left">Keybinds reseted.</div>',
            type: 'success',
            theme: 'metroui',
            layout: 'bottomRight',
            closeWith: ['click'],
            timeout: 2000,
            animation: {
                speed: 500, // opening & closing animation speed
                open: function (promise) {
                    var n = this;
                    var Timeline = new mojs.Timeline();
                    var body = new mojs.Html({
                        el        : n.barDom,
                        x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                        isForce3d : true,
                        onComplete: function () {
                            promise(function(resolve) {
                                resolve();
                            })
                        }
                    });
        
                    var parent = new mojs.Shape({
                        parent: n.barDom,
                        width      : 200,
                        height     : n.barDom.getBoundingClientRect().height,
                        radius     : 0,
                        /* eslint-disable-next-line */
                        x          : {[150]: -150},
                        duration   : 1.2 * 500,
                        isShowStart: true
                    });
        
                    n.barDom.style['overflow'] = 'visible';
                    parent.el.style['overflow'] = 'hidden';
        
                    var burst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 10,
                        top     : n.barDom.getBoundingClientRect().height + 75,
                        degree  : 90,
                        radius  : 75,
                        angle   : {[-90]: 40},
                        children: {
                            fill     : '#88e85f',
                            delay    : 'stagger(500, -50)',
                            radius   : 'rand(8, 25)',
                            direction: -1,
                            isSwirl  : true
                        }
                    });
        
                    var fadeBurst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 2,
                        degree  : 0,
                        angle   : 75,
                        radius  : {0: 100},
                        top     : '90%',
                        children: {
                            fill     : '#88e85f',
                            pathScale: [.65, 1],
                            radius   : 'rand(12, 15)',
                            direction: [-1, 1],
                            delay    : .8 * 500,
                            isSwirl  : true
                        }
                    });
        
                    Timeline.add(body, burst, fadeBurst, parent);
                    Timeline.play();
                },
              close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                    
                }).play();
            }
            }
          }).show()
    }

    static showCanceledNotification() {
        setTimeout(() => {
            $("#noty_layout__bottomRight").remove();
        }, 5000);
        new Noty({
            text: '<div class="text-left">Canceled.</div>',
            type: 'warning',
            theme: 'metroui',
            layout: 'bottomRight',
            closeWith: ['click'],
            timeout: 2000,
            animation: {
                speed: 500, // opening & closing animation speed
                open: function (promise) {
                    var n = this;
                    var Timeline = new mojs.Timeline();
                    var body = new mojs.Html({
                        el        : n.barDom,
                        x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                        isForce3d : true,
                        onComplete: function () {
                            promise(function(resolve) {
                                resolve();
                            })
                        }
                    });
        
                    var parent = new mojs.Shape({
                        parent: n.barDom,
                        width      : 200,
                        height     : n.barDom.getBoundingClientRect().height,
                        radius     : 0,
                        /* eslint-disable-next-line */
                        x          : {[150]: -150},
                        duration   : 1.2 * 500,
                        isShowStart: true
                    });
        
                    n.barDom.style['overflow'] = 'visible';
                    parent.el.style['overflow'] = 'hidden';
        
                    var burst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 10,
                        top     : n.barDom.getBoundingClientRect().height + 75,
                        degree  : 90,
                        radius  : 75,
                        angle   : {[-90]: 40},
                        children: {
                            fill     : '#EBD761',
                            delay    : 'stagger(500, -50)',
                            radius   : 'rand(8, 25)',
                            direction: -1,
                            isSwirl  : true
                        }
                    });
        
                    var fadeBurst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 2,
                        degree  : 0,
                        angle   : 75,
                        radius  : {0: 100},
                        top     : '90%',
                        children: {
                            fill     : '#EBD761',
                            pathScale: [.65, 1],
                            radius   : 'rand(12, 15)',
                            direction: [-1, 1],
                            delay    : .8 * 500,
                            isSwirl  : true
                        }
                    });
        
                    Timeline.add(body, burst, fadeBurst, parent);
                    Timeline.play();
                },
              close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                    
                }).play();
            }
            }
          }).show()
    }

    static showSelectedSkinNotification() {
        setTimeout(() => {
            $("#noty_layout__bottomRight").remove();
        }, 5000);
        new Noty({
            text: '<div class="text-left">Skin Selected.</div>',
            type: 'warning',
            theme: 'metroui',
            layout: 'bottomRight',
            closeWith: ['click'],
            timeout: 2000,
            animation: {
                speed: 500, // opening & closing animation speed
                open: function (promise) {
                    var n = this;
                    var Timeline = new mojs.Timeline();
                    var body = new mojs.Html({
                        el        : n.barDom,
                        x         : {500: 0, delay: 0, duration: 500, easing: 'elastic.out'},
                        isForce3d : true,
                        onComplete: function () {
                            promise(function(resolve) {
                                resolve();
                            })
                        }
                    });
        
                    var parent = new mojs.Shape({
                        parent: n.barDom,
                        width      : 200,
                        height     : n.barDom.getBoundingClientRect().height,
                        radius     : 0,
                        /* eslint-disable-next-line */
                        x          : {[150]: -150},
                        duration   : 1.2 * 500,
                        isShowStart: true
                    });
        
                    n.barDom.style['overflow'] = 'visible';
                    parent.el.style['overflow'] = 'hidden';
        
                    var burst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 10,
                        top     : n.barDom.getBoundingClientRect().height + 75,
                        degree  : 90,
                        radius  : 75,
                        angle   : {[-90]: 40},
                        children: {
                            fill     : '#EBD761',
                            delay    : 'stagger(500, -50)',
                            radius   : 'rand(8, 25)',
                            direction: -1,
                            isSwirl  : true
                        }
                    });
        
                    var fadeBurst = new mojs.Burst({
                        parent  : parent.el,
                        count   : 2,
                        degree  : 0,
                        angle   : 75,
                        radius  : {0: 100},
                        top     : '90%',
                        children: {
                            fill     : '#EBD761',
                            pathScale: [.65, 1],
                            radius   : 'rand(12, 15)',
                            direction: [-1, 1],
                            delay    : .8 * 500,
                            isSwirl  : true
                        }
                    });
        
                    Timeline.add(body, burst, fadeBurst, parent);
                    Timeline.play();
                },
              close: function (promise) {
                var n = this;
                new mojs.Html({
                    el        : n.barDom,
                    x         : {0: 500, delay: 10, duration: 500, easing: 'cubic.out'},
                    skewY     : {0: 10, delay: 10, duration: 500, easing: 'cubic.out'},
                    isForce3d : true,
                    onComplete: function () {
                        promise(function(resolve) {
                            resolve();
                        })
                    }
                    
                }).play();
            }
            }
          }).show()
    }
}
