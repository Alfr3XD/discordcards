// Utils
/**
 * Dibuja un rectángulo con curvas en los vértices [opcional]
 * @param ctx Contexto del canvas
 * @param x Eje X [`Derecha o Izquierda`] del inicio de tu rectángulo`
 * @param y Eje Y [`Arriba o Abajo`] del inicio de tu rectángulo`
 * @param w Anchura de tu rectángulo
 * @param h Altura de tu rectángulo
 * @param r Radio de las curvas de tu rectángulo
 * @param f ¿Quieres que tu rectángulo sea rellenado?
 * @param s ¿Quieres que tu rectángulo tenga contorno?
 */
export function fillRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number | {tl: number, tr: number, br: number, bl: number}, f?: boolean, s?: boolean): void;
/**
 * Cambia el formato de un número a una cadena de texto
 * ```js
 * abbreviateNumber(50000); // => '50K'
 * ```
 * @param value El número que se modificará
 */
export function abbreviateNumber(value: number): string;

// Level Card
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
    /**
     * Los datos se pueden ingresar si lo deseas en forma de [object]
     * @param data Recomiendo hacerlo con los métodos.
     */
    constructor(data?: CardLevelData);
    /**
     * @param username nombre del usuario
     * @param color color del nombre del usuario
     */
    public setUsername(username: string, color: string): this
    /**
     * @param nickname nickname del usuario
     * @param color color del nickname del usuario
    */
    public setNickname(nickname: string, color: string): this
    /**
     * @param {number | string} rank rank del usuario
     * @param {string} [color] color del rank del usuario
     * @param {string} [text] texto del rank del usuario
     */
    public setRank(rank: number, color: string, text: string): this
    /**
     * @param level nivel del usuario
     * @param color color del nivel del usuario
     * @param text texto del nivel del usuario
     */
    public setLevel(level: number, color: string, text: string): this
    /**
     * @param xp experiencia actual del usuario
     * @param max experiencia requerida
     * @param color color del xp del usuario
     * @param text texto del xp del usuario
     */
    public setXp(xp: number, max: number, color: string, text:string): this
    /**
     * @param color 
     */
    public setCurrentBarColor(color: string | {hex: string, position: number}[]): this
    /**
     * @param avatar url de la imagen de avatar
     * @param color color del borde de la imagen de avatar
     */
    public setAvatar(avatar: string, color: string): this
    /**
     * @param background url de la imagen de fondo
     * @param blur cambia el desenfocado de la imágen de fondo
     */
    public setBackground(background: string, blur: number): this
    /** Construye la tarjeta de niveles */
    public async render(): Promise<Buffer>    
}