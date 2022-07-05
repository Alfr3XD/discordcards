export type CardLevelData = {
    username?: string,
    nickname?: string,
    rank?: number,
    level?: number,
    xp?: { current: number, max: number },
    colors?: {
        bar?: string | { hex: string, position: number }[],
        stroke?: string,
        username: string,
        nickname: string,
        level: string,
        rank: string,
        xp: string
    },
    images?: { avatar: string, background: string },
    blur?: number,
    radius?: number
}
/**
* Modifica una tarjeta de rankin o niveles de un usuario.
* @example
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
export class LevelCard {
    constructor(data: CardLevelData);

    public setUsername(username: string, color: string): this
    public setNickname(nickname: string, color: string): this
    public setRank(rank: number, color: string, text: string): this
    public setLevel(level: number, color: string, text: string): this
    public setXp(xp: number, max: number, color: string, text:string): this
    public setCurrentBarColor(color: string | {hex: string, position: number}[]): this
    public setAvatar(avatar: string, color: string): this
    public setBackground(background: string, blur: number): this
    public async render(): Promise<Buffer>    
}