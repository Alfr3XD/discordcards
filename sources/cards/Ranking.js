const { createCanvas, loadImage, registerFont } = require('canvas');
const fillRoundRect = require('../utils/fillRoundRect');
const abbreviateNumber = require('../utils/abbreviateNumber');

/**
 * @typedef { object } RankingData
 * @property { { box: string, username: string, xp: string, level: string, firstRank: string, secondRank: string, thirdRank: string } } [colors]
 * @property {{ username: string, xp: string, level: string, ranks: string }} [fonts]
 * @property { {avatar: string, tag: string, level: number, xp: number, max_xp: number, top: number}[]g } [usersData]
 */

/**
 * Crea una lista de ranking de tu servidor
 * ```js
 * const top = new Ranking()
 * .setUsersData([{avatar: "./image.png", top: 1, tag: "User#0000", level: 1, xp: 100, max_xp: 110}])
 * 
 * card.render()
 * .then((buffer) => {
 *  attachment.file(buffer, "image.png");
 * });
 * ```
 */
class Ranking {
    /**
     * Los datos se pueden ingresar si lo deseas en forma de [object]
     * @param {RankingData} [data]? Recomiendo hacerlo con los métodos.
     */
    constructor(data) {
        this.colors = data?.colors || { box: '#212121', username: '#ffffff', xp: '#ffffff', level: '#ffffff', firstRank: '#f7c716', secondRank: '#9e9e9e', thirdRank: '#94610f' };
        this.fonts = data?.fonts || { username: 'fredoka', xp: 'fredoka', level: 'fredoka', ranks: 'fredoka' };
        this.usersData = data?.usersData || [{ top: 1, avatar:"https://i.pinimg.com/736x/c6/a8/5f/c6a85f7dbcbf367d5dc1baa2aaa19a73.jpg", tag: 'firstUser#0001', xp: 100, max_xp: 110, level: 1 }, { top: 2, avatar: "https://i.pinimg.com/736x/c6/a8/5f/c6a85f7dbcbf367d5dc1baa2aaa19a73.jpg", tag: 'secondUser#0002', xp: 90, max_xp: 110, level: 1 }, { top: 3, avatar: "https://i.pinimg.com/736x/c6/a8/5f/c6a85f7dbcbf367d5dc1baa2aaa19a73.jpg", tag: 'thirdUser#0003', xp: 80, max_xp: 110, level: 1 }];
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
     * 
     * @param {{ box: string, username: string, xp: string, level: string, firstRank: string, secondRank: string, thirdRank: string }} colors 
     */
    setColors(colors) {
        this.colors = colors;
        return this;
    }
    /**
     * 
     * @param {{ username: string, xp: string, level: string, ranks: string }} fonts 
     */
    setFonts(fonts) {
        this.fonts = fonts;
        return this;
    }
    /**
     * 
     * @param { {avatar: string, tag: string, level: number, xp: number, max_xp: number, top: number}[] } usersData 
     */
    setUsersData(usersData) {
        this.usersData = usersData;
        return this;
    }
    async render() {
        var font = "fredoka";
        registerFont(__dirname + "../../../resources/fonts/FredokaOne-Regular.ttf", { family: font });

        const canvas = createCanvas(680, 745);
        const ctx = canvas.getContext('2d');
        if(this.usersData) {
            var Box_Y = 0, Avatar_Y = 0, Tag_Y = 45, XP_Y = 55, Level_Y = 30, Rank_Y = 45;
            for(var i=0; i < this.usersData.length; i++) {
                ctx.save();
                ctx.fillStyle = this.box;
                ctx.globalAlpha = 0.6;
                fillRoundRect(ctx, 0, Box_Y, canvas.width, 70, 15, true, false);
                ctx.globalAlpha = 1;

                const avatar = await loadImage(this.usersData[i].avatar);
                ctx.clip();
                ctx.drawImage(avatar, 0, Avatar_Y, 70, 70);
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 8;
                ctx.shadowOffsetY = 6;
                ctx.shadowColor = "#0a0a0a";
                
                ctx.fillStyle = this.colors.username;
                ctx.font = "25px " + this.fonts.username;
                ctx.textAlign = 'left';
                ctx.fillText(this.usersData[i].tag, 80, Tag_Y, 260);

                ctx.fillStyle = this.colors.xp;
                ctx.font = "20px " + this.fonts.xp;
                ctx.textAlign = 'right';
                ctx.fillText(`XP: ${abbreviateNumber(this.usersData[i].xp)} / ${abbreviateNumber(this.usersData[i].max_xp)}`, 560, XP_Y, 200);

                ctx.fillStyle = this.colors.level;
                ctx.font = "20px " + this.fonts.level;
                ctx.textAlign = 'right';
                ctx.fillText("Nivel: " + this.usersData[i].level, 560, Level_Y, 200);

                if(this.usersData[i].top === 1) {
                    ctx.fillStyle = this.colors.firstRank;
                } 
                else if(this.usersData[i].top === 2) {
                    ctx.fillStyle = this.colors.secondRank;
                }
                else if(this.usersData[i].top === 3) {
                    ctx.fillStyle = this.colors.thirdRank;
                }

                ctx.font = "30px " + this.fonts.ranks;
                ctx.textAlign = 'right';
                ctx.fillText("#" + this.usersData[i].top, 660, Rank_Y, 75);

                Box_Y = Box_Y + 75;
                Avatar_Y = Avatar_Y + 75;
                Tag_Y = Tag_Y + 75;
                XP_Y = XP_Y + 75;
                Level_Y = Level_Y + 75;
                Rank_Y = Rank_Y + 75;
                ctx.restore();  
            }
        } else {
            ctx.font = "40px " + font;
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 8;
            ctx.shadowOffsetY = 6;
            ctx.shadowColor = "#0a0a0a"
            ctx.fillText('NO ENCONTRADO', 340, 370, 500);
        }

        return canvas.toBuffer();
    }
}

module.exports = Ranking;