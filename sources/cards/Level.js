const { createCanvas, loadImage, registerFont } = require('canvas');
const { read } = require('jimp');
const fillRoundRect = require('../utils/fillRoundRect');
const abbreviateNumber = require('../utils/abbreviateNumber');

/**
 * @typedef { object } CardLevelData
 * @property { string } [username]
 * @property { string } [nickname]
 * @property { number } [rank]
 * @property { number } [level]
 * @property { { current: number, max: number} } [xp] 
 * @property { { bar?: string | {hex: string, position: number}[], stroke?: string, username: string, nickname: string, level: string, rank: string, xp: string } } [colors]
 * @property { { avatar: string, background: string } } [images]
 * @property { { usernameFont: string, nicknameFont: string, rankFont: string, levelFont: string, xpFont: string } } [fonts]
 * @property { number } [blur]
 * @property { number } [radius]
 * @property { string } [levelText]
 * @property { string } [rankText]
 * @property { string } [xpText]
 */
/**
 * Modifica una tarjeta de rankin o niveles de un usuario.
 * ```js
 * const card = new Level()
 * .setLevel(1)
 * .setUsername("User#0000")
 * 
 * card.render()
 * .then((buffer) => {
 *  attachment.file(buffer, "image.png");
 * });
 * ```
 */
class Level {
    /**
     * Los datos se pueden ingresar si lo deseas en forma de [object]
     * @param { CardLevelData } [data]? Recomiendo hacerlo con los métodos.
     */
    constructor(data) {
        this.username   = data?.username    || "Username#0000";
        this.nickname   = data?.nickname    || "@developer";
        this.rank       = data?.rank        || 1;
        this.level      = data?.level       || 1;
        this.xp         = data?.xp          || { current: 30, max: 100 };
        this.colors     = data?.colors      || { bar: "#ffffff", stroke: "#ffffff", username: "#ffffff", nickname: "#ffffff", rank: "#ffffff", level: "#ffffff", xp: "#ffffff" };
        this.images     = data?.images      || { avatar: "https://i.pinimg.com/736x/c6/a8/5f/c6a85f7dbcbf367d5dc1baa2aaa19a73.jpg", background: "https://img.freepik.com/foto-gratis/fondo-azul-degradado-lujo-abstracto-azul-oscuro-liso-banner-estudio-vineta-negra_1258-52379.jpg" };
        this.fonts      = data?.fonts       || { usernameFont: "fredoka", nicknameFont: "fredoka", rankFont: "fredoka", levelFont: "fredoka", xpFont: "fredoka" };
        this.blur       = data?.blur        || 4;
        this.radius     = data?.radius      || 25;

        this.levelText  = "Level {level}";
        this.xpText     = "XP: {current} / {max}";
        this.rankText   = "#{rank}";

        this.registerFonts();
    }

    /**
    * 
    * @param { { path: string, options: { family: string, weight?: string, style?: string } }[] } font Datos de la fuente de letra
    */
    registerFonts(font) {
        if(font?.length > 0) {
            font.forEach((f) => {
                registerFont(f.path, f.options);
            });
        }
        return this;
    }

    /**
     * @param {string} username nombre del usuario
     * @param {string} [color] color del nombre del usuario
     * @param {string} [font] Fuente de letra
     */
    setUsername(username, color, font) {
        if(typeof username !== "string") throw new Error(`El nombre /*username/* no está ingresado en tipo string, en su lugar se ingresó: ${typeof username}`);
        this.username = username;
        if(color) this.colors.username = color;
        if(font) this.fonts.usernameFont = font;
        return this;
    }

    /**
     * @param {string} nickname nickname del usuario
     * @param {string} [color] color del nickname del usuario
     * @param {string} [font] Fuente de letra
    */
    setNickname(nickname, color, font) {
        if(typeof nickname !== "string") throw new Error(`El apodo /*nickname/* no está ingresado en tipo string, en su lugar se ingresó: ${typeof nickname}`);
        this.nickname = nickname;
        if(color) this.colors.nickname = color;
        if(font) this.fonts.nicknameFont = font;
        return this;
    }

    /**
     * @param {number | string} rank rank del usuario
     * @param {string} [color] color del rank del usuario
     * @param {string} [text] texto del rank del usuario
     * @param {string} [font] Fuente de letra
     */
    setRank(rank, color, text, font) {
        if(typeof rank !== "number" && typeof rank !== "string") throw new Error(`El rank no está ingresado en tipo number o string, en su lugar se ingresó: ${typeof rank}`);
        this.rank = rank;
        if(color) this.colors.rank = color;
        if(text) this.rankText = text;
        if(font) this.fonts.rankFont = font;
        return this;
    }

    /**
     * @param {number} level nivel del usuario
     * @param {string} [color] color del nivel del usuario
     * @param {string} [text] texto del nivel del usuario
     * @param {string} [font] Fuente de letra
     */
    setLevel(level, color, text, font) {
        if(typeof level !== "number") throw new Error(`El nivel no está ingresado en tipo number, en su lugar se ingresó: ${typeof level}`);
        this.level = level;
        if(color) this.colors.level = color;
        if(text) this.levelText = text;
        if(font) this.fonts.levelFont = font;
        return this;
    }

    /**
     * @param {number} xp experiencia actual del usuario
     * @param {number} max experiencia requerida
     * @param {string} [color] color del xp del usuario
     * @param {string} [text] texto del xp del usuario
     * @param {string} [font] Fuente de letra
     */
    setXp(xp, max, color, text, font) {
        if(typeof xp !== "number") throw new Error(`El xp no está ingresado en tipo number, en su lugar se ingresó: ${typeof xp}`);
        if(typeof max !== "number") throw new Error(`El maximo de xp no está ingresado en tipo number, en su lugar se ingresó: ${typeof max}`);

        if(xp > max) throw new Error(`La experiencia actual no puede ser mayor a la experiencia requerida, ${xp} > ${max}`);
        this.xp = { current: xp, max: max };
        if(color) {
            if(typeof color !== "string") throw new Error(`El color del xp no está ingresado en tipo string, en su lugar se ingresó: ${typeof color}`);
            this.colors.xp = color;
        }
        if(text) {
            if(typeof text !== "string") throw new Error(`El texto del xp no está ingresado en tipo string, en su lugar se ingresó: ${typeof text}`);
            this.xpText = text;
        }
        if(font) {
            if(typeof font !== "string") throw new Error(`La fuente del xp no está ingresado en tipo string, en su lugar se ingresó: ${typeof font}`);
            this.fonts.xpFont = font;
        }
        return this;
    }

    /**
     * @param {string | {hex: string, position: number}[]} color 
     */
    setCurrentBarColor(color) {
        if(typeof color !== "string" && !Array.isArray(color)) throw new Error(`El color de la barra no está ingresado en tipo string o array, en su lugar se ingresó: ${typeof color}`);
        this.colors.bar = color;
        return this;
    }

    /**
     * @param {string} avatar url de la imagen de avatar
     * @param {string} [color] color del borde de la imagen de avatar
     */
    setAvatar(avatar, color) {
        if(typeof avatar !== "string") throw new Error(`El avatar no está ingresado en tipo string, en su lugar se ingresó: ${typeof avatar}`);
        this.images.avatar = avatar;
        if(color) this.colors.stroke = color;
        return this;
    }

    /**
     * @param {string} background url de la imagen de fondo
     * @param {number} [blur] cambia el desenfocado de la imágen de fondo
     * @param {number} [radius] cambia la intensidad del curveado de la imágen de fondo
     */
    setBackground(background, blur, radius) {
        if(typeof background !== "string") throw new Error(`El background no está ingresado en tipo string, en su lugar se ingresó: ${typeof background}`);
        this.images.background = background;
        if(typeof blur !== "number") throw new Error(`El blur no está ingresado en tipo number, en su lugar se ingresó: ${typeof blur}`);
        if(blur) this.blur = blur;
        if(typeof radius !== "number") throw new Error(`El radius no está ingresado en tipo number, en su lugar se ingresó: ${typeof radius}`);
        if(radius) this.radius = radius;
        return this;
    }
    /** Construye la tarjeta de niveles */
    async render() {
        var font = "fredoka"
        registerFont(__dirname + "../../../resources/fonts/FredokaOne-Regular.ttf", { family: font });
        const canvas = createCanvas(1020, 320);
        const ctx = canvas.getContext("2d");
            
        const img = await read(this.images.background);
        img.blur(this.blur); 
        const image = await img.getBufferAsync("image/png");

        ctx.save();
        const Fondo = await loadImage(image);
        fillRoundRect(ctx, 0, 0, canvas.width, canvas.height, this.radius, true);
        ctx.clip();      
        ctx.drawImage(Fondo, -30, -120, 1085, 555);
        ctx.restore();

        ctx.save();
        const Avatar = await loadImage(this.images.avatar)
        ctx.strokeStyle = this.colors.stroke;
        ctx.lineWidth = 12;
        ctx.fillStyle = this.colors.stroke;
        fillRoundRect(ctx, 35, 25, 200, 200, 35, true, true);
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#0a0a0a";
        ctx.shadowOffsetY = 8;
        ctx.shadowOffsetX = -6;
        ctx.clip();
        ctx.drawImage(Avatar, 35, 25, 200, 200);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = 0.45;
        ctx.shadowBlur = 30;
        ctx.shadowColor = "#ffffff";
        fillRoundRect(ctx, 35, 250, 950, 45, 10, true, false);
        let xp = this.xp.current;
        let max_xp = this.xp.max;
        const percentLvl = (xp * 100) / max_xp;
        const progressLvl = (percentLvl * 950) / 100;
        ctx.clip();
        if(typeof this.colors.bar === "object") {
            let gradient = ctx.createLinearGradient(0, 0, progressLvl, 320);
            for(let i = 0; i < this.colors.bar.length; i++) {
                gradient.addColorStop(this.colors.bar[i].position, this.colors.bar[i].hex);
            }
            ctx.fillStyle = gradient;
        } else ctx.fillStyle = this.colors.bar;
        ctx.globalAlpha = 0.65;
        fillRoundRect(ctx, 35, 250, progressLvl, 45, 0, true, false);
        ctx.restore();

        var rankText = this.rankText;
        var levelText = this.levelText;
        var xpText = this.xpText;

        ctx.shadowColor = "#0a0a0a";
        ctx.shadowOffsetY = 8;
        ctx.shadowOffsetX = -6;
        ctx.shadowBlur = 8;

        ctx.font = "50px " + this.fonts.usernameFont;
        ctx.fillStyle = this.colors.username;
        ctx.textAlign = "left";
        ctx.fillText(this.username, 265, 70, 570);

        ctx.font = "30px " + this.fonts.nicknameFont;
        ctx.fillStyle = this.colors.nickname;
        ctx.textAlign = "left";
        ctx.fillText(this.nickname, 265, 110, 270);

        ctx.font = "55px " + this.fonts.levelFont;
        ctx.fillStyle = this.colors.level;
        ctx.textAlign = "left";
        ctx.fillText(levelText
        .replace(/{level}/g, this.level)
        .toUpperCase(), 270, 230, 385);

        ctx.font = "40px " + this.fonts.rankFont;
        ctx.fillStyle = this.colors.rank;
        ctx.textAlign = "right";
        ctx.fillText(rankText
        .replace(/{rank}/g, this.rank), 965, 65, 570);

        ctx.font = "35px " + this.fonts.xpFont;
        ctx.fillStyle = this.colors.xp;
        ctx.textAlign = "right";
        ctx.fillText(xpText
        .replace(/{current}/g, abbreviateNumber(this.xp.current))
        .replace(/{max}/g, abbreviateNumber(this.xp.max)), 965, 230, 400);

        return canvas.toBuffer();
    }
}

module.exports = Level;