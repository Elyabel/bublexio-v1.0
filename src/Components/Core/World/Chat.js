export class Chat {
    static create = Object.create({
        messages: [],
        waitUntil: 0,
        canvas: document.createElement('chatCanvas'),
        visible: false,
    });
}