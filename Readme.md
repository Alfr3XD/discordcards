## DISCORDCARDS ⭐
Una librería de imágenes manipualadas con canvas para tus aplicaciones de discord.
# INSTALACIÓN 📁
```sh
npm i discordcards
```
## DOCUMENTACIÓN 📄
| Clases | Constructor |
|--|--|
| MemberCard | `CardMemberData` |
| LevelCard | `CardLevelData` |


| Funciones | Parámetros|
|--|--|
| fillRoundRect | `ctx: CanvasRenderingContext2D` `x: number` `y: number` `w: number` `h: number` `r: number | {tl: number, tr: number, br: number, bl: number}` `f?: boolean` `s?: boolean`
| abbreviateNumber | `value: number` |
| circleImage | `ctx: CanvasRenderingContext2D` `x: number` `y: number` `w: number` `h: number` `f?: boolean` `s?: boolean` |

` Pronto habrán más módulos para tus aplicaciones`

# *`CLASS`* **MemberCard:**
 .registerFonts(font)
 
| parámetro | type | opcional | descripción|
|--|--|--|--|
| font | array |  | Datos de la fuente de letra |
`returns: MemberCard`

.setUsername(username, color, font)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| username | string |  | Nombre de usuario |
| color | string | ✓ | El color del texto |
| font | string | ✓  | La fuente de letra |
`returns: MemberCard`

.setTitle(title, color, font)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| title | string |  | Título de la tarjeta |
| color | string | ✓ | El color del texto |
| font | string | ✓  | La fuente de letra |
`returns: MemberCard`

.setDescription(description, color, font)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| description | string |  | Descripción de la tarjeta |
| color | string | ✓ | El color del texto |
| font | string | ✓  | La fuente de letra |
`returns: MemberCard`

.setMemberCount(memberCount, color, font)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| memberCount | string |  | El contador de miembros |
| color | string | ✓ | El color del texto |
| font | string | ✓  | La fuente de letra |
`returns: MemberCard`

.setBackground(background, blur, radius)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| background | string |  | URL de la imágen de fondo |
| blur | number | ✓ | El difuminado del fondo |
| radius | string | ✓  | La intensidad del borde de la tarjeta |
`returns: MemberCard`

.setAvatar(avatar, color)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| avatar | string |  | URL del avatar del usuario |
| color | string | ✓ | Color del aro del usuario |
`returns: MemberCard`

.setBox(box, color)
| parámetro | type | opcional | descripción|
|--|--|--|--|
| box | boolean |  | Una caja de fondo |
| color | string | ✓ | Color de la caja |
`returns: MemberCard`

.render()
`returns: Promise<Buffer>`

# *`TYPEDEF`* **CardMemberData**
```js
{
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
```

# *`TYPEDEF`* **CardLevelData**
```js
{
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
	xpText?: string
}
```