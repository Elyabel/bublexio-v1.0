export class Color {
    static fromHex(color) {
        let hex = color;
        if (color.startsWith('#')) hex = color.slice(1);
        if (hex.length === 3) hex = hex.split('').map((c) => c + c).join('');
        if (hex.length !== 6) throw new Error(`Invalid color ${color}`);
        const v = parseInt(hex, 16);
        /* eslint-disable-next-line */
        return new Color(v >>> 16 & 255, v >>> 8 & 255, 255 & v, `#${hex}`)
    }
    constructor(r, g, b, hex) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.hexCache = hex;
    }
    static clone() {
        return new Color(this.r, this.g, this.b);
    }
    static toHex() {
        if (this.hexCache) return this.hexCache;
        /* eslint-disable-next-line */
        return this.hexCache = `0x${(1 << 24 | this.r << 16 | this.g << 8 | this.b).toString(16).slice(1)}`;
    }
    static toDarken() {
        let color = this.toHex().slice(2);
        let amount = (-20);
        return '0x' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }
    darken(grade) {
        grade /= 10;
        this.r *= 1 - grade;
        this.g *= 1 - grade;
        this.b *= 1 - grade;
        return this;
    }
    static darker(grade = 1) {
        return this.clone().darken(grade);
    }
}