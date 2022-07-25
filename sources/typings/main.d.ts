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

/**
 * 
 * @param ctx Contexto de canvas
 * @param x Eje X [`Derecha o Izquierda`] del inicio de tu rectángulo`
 * @param y Eje Y [`Arriba o Abajo`] del inicio de tu rectángulo`
 * @param w Anchura de tu circuferencia
 * @param h Altura de tu circuferencia
 * @param f ¿Quieres que tu circuferencia sea rellenado?
 * @param s ¿Quieres que tu circuferencia tenga contorno?
 */
export function circleImage(ctx: CanvasRenderingContext2D, x: number, y: number, h: number, w: number, f?: boolean, s?: boolean): void

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
    fonts?: {usernameFont: string, nicknameFont: string, rankFont: string, levelFont: string, xpFont: string}[],
    blur?: number,
    radius?: number,
    levelText?: string,
    rankText?: string,
    xpText?: string,
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
    * @param font Datos de la fuente de letra
    */
    public registerFont(font: {path: string, options: { family: string, weight?: string, style?: string }}[]): this
    /**
     * @param username nombre del usuario
     * @param color color del nombre del usuario
     * @param font fuente del nombre del usuario
     */
    public setUsername(username: string, color?: string, font?: string): this
    /**
     * @param nickname nickname del usuario
     * @param color color del nickname del usuario
     * @param font fuente del nickname del usuario
    */
    public setNickname(nickname: string, color?: string, font?: string): this
    /**
     * @param rank rank del usuario
     * @param color del rank del usuario
     * @param text texto del rank del usuario
     * @param font fuente del rank del usuario
     */
    public setRank(rank: number, color?: string, text?: string, font?: string): this
    /**
     * @param level nivel del usuario
     * @param color color del nivel del usuario
     * @param text texto del nivel del usuario
     * @param font fuente del nivel del usuario
     */
    public setLevel(level: number, color?: string, text?: string, font?: string): this
    /**
     * @param xp experiencia actual del usuario
     * @param max experiencia requerida
     * @param color color del xp del usuario
     * @param text texto del xp del usuario
     * @param font fuente del xp del usuario
     */
    public setXp(xp: number, max: number, color?: string, text?:string, font?: string): this
    /**
     * @param color 
     */
    public setCurrentBarColor(color: string | {hex: string, position: number}[]): this
    /**
     * @param avatar url de la imagen de avatar
     * @param color color del borde de la imagen de avatar
     */
    public setAvatar(avatar: string, color?: string): this
    /**
     * @param background url de la imagen de fondo
     * @param blur cambia el desenfocado de la imágen de fondo
     */
    public setBackground(background: string, blur?: number): this
    /** Construye la tarjeta de niveles */
    public render(): Promise<Buffer>    
}

export type CardMemberData = {
    username?: string,
    title?: string,
    description?: string,
    memberCount?: string,
    colors?: {
        title: string,
        description: string,
        username: string,
        stroke: string,
        box: string,
        memberCount: string
    }
    avatar?: string,
    background?: string,
    blur?: number,
    radius?: number,
    box?: boolean,
    fonts?: {
        usernameFont: string,
        titleFont: string,
        descriptionFont: string,
        memberCountFont: string
    }
}

/**
 * Modifica una tarjeta de miembro de Discord
 * ```js
 * const card = new MemberCard()
 * .setUsername("User#0000")
 * 
 * card.render()
 * .then((buffer) => {
 *  attachment.file(buffer, "image.png");
 * });
 * ```
 */
export class MemberCard {
    /**
     * Los datos se pueden ingresar si lo deseas en forma de [object]
     * @param data Recomiendo hacerlo con los métodos.
     */
    constructor(data?: CardMemberData);
    /**
    * @param font Datos de la fuente de letra
    */
    public registerFont(font: {path: string, options: { family: string, weight?: string, style?: string }}[]): this

    /**
     * @param username nombre del usuario
     * @param color color del nombre del usuario
     * @param font Fuente de letra
     */
     setUsername(username: string, color?: string, font?: string): this

    /**
     * @param title Título de la tarjeta
     * @param color Color del título
     * @param font Fuente de letra
     */
    setTitle(title:string, color?: string, font?: string): this

    /**
     * @param description Descripción de la tarjeta
     * @param color Color de la descripción
     * @param font Fuente de letra
     */
    setDescription(description:string, color?: string, font?: string): this

    /**
     * @param memberCount Miembros del servidor
     * @param color Color del texto
     * @param font Fuente de letra
     */
    setMemberCount(memberCount:string, color?: string, font?: string): this

    /**
     * @param background url de la imagen de fondo
     * @param blur cambia el desenfocado de la imágen de fondo
     * @param radius cambia el radio de la imágen de fondo
     */
    setBackground(background: string, blur?: number, radius?: number): this

    /**
     * @param avatar url de la imagen de avatar
     * @param color color del borde de la imagen de avatar
     */
     setAvatar(avatar: string, color?: string): this

    /**
     * @param box activa o desactiva el borde de la tarjeta 
     * @param color color de la caja
     */
    setBox(box: boolean, color?: string): this

    /** Construye la tarjeta de niveles */
    public render(): Promise<Buffer>  
}
