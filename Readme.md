# DISCORDCARDS ⭐
Una librería de imágenes manipualadas con canvas para tus aplicaciones de discord.
# INSTALACIÓN 📁
```sh
npm i @alfr3xd/discordcards
```
[![NPM](https://nodei.co/npm/@alfr3xd/discordcards.png)](https://nodei.co/npm/@alfr3xd/discordcards/)

## DOCUMENTACIÓN 📄
| Clases | Constructor |
|--|--|
| MemberCard | `CardMemberData` |
| LevelCard | `CardLevelData` |
| Ranking | `RankingData` |



| Funciones | Parámetros|
|--|--|
| fillRoundRect | `ctx: CanvasRenderingContext2D` `x: number` `y: number` `w: number` `h: number` `r: number - {tl: number, tr: number, br: number, bl: number}` `f?: boolean` `s?: boolean`
| abbreviateNumber | `value: number` |
| circleImage | `ctx: CanvasRenderingContext2D` `x: number` `y: number` `w: number` `h: number` `f?: boolean` `s?: boolean` |


` Pronto habrán más módulos para tus aplicaciones`

# *`CLASS`* **LevelCard:**
.registerFonts(font)
 
| parámetro | type | opcional | descripción|
|--|--|--|--|
| font | array |   | Datos de la fuente de letra |


`returns: LevelCard`

.setUsername(username, color, font)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| username | string |  | El nombre del usuario |
| color | string | ✓ | El color de texto |
| font | string | ✓ | La fuente de letra |

`returns: LevelCard`

.setNickname(nickname, color, font)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| nickname | string |  | El nickname del usuario |
| color | string | ✓ | El color de texto |
| font | string | ✓ | La fuente de letra |

`returns: LevelCard`

.setRank(rank, color, text, font)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| rank | number |  | El top del ranking del usuario |
| color | string | ✓ | El color de texto |
| text | string | ✓ | El texto del ranking: `{rank}` `(alias in text)` |
| font | string | ✓ | La fuente de letra |

`returns: LevelCard`

.setLevel(level, color, text, font)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| level | number |  | Nivel del usuario |
| color | string | ✓ | El color de texto |
| text | string | ✓ | El texto del  nivel: `{level}` `(alias in text)` |
| font | string | ✓ | La fuente de letra |

`returns: LevelCard`

.setXp(xp, max, color, text, font)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| xp | number |  | Experiencia actual |
| max | number |  | Experiencia máxima |
| color | string | ✓ | El color de texto |
| text | string | ✓ | El texto de la xp: `{current}` `{max}` `(alias in text)` |
| font | string | ✓ | La fuente de letra |

`returns: LevelCard`

.setCurrentBarColor(color)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| color | string o {hex: string, position: number}[] |  | El color de la barra de experiencia |

`returns: LevelCard`

.setBackground(background, blur, radius)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| background | string |  | URL de la imágen de fondo |
| blur | number | ✓ | El difuminado del fondo |
| radius | string | ✓  | La intensidad del borde de la tarjeta |


`returns: LevelCard`

.setAvatar(avatar, color)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| avatar | string |  | URL del avatar del usuario |
| color | string | ✓ | Color del aro del usuario |


`returns: LevelCard`

.render()


`returns: Promise<Buffer>`

![LevelCardImage](https://media.discordapp.net/attachments/950886048198705222/1001163315101311027/Image.png)

# *`CLASS`* **MemberCard:**
.registerFonts(font)
 
| parámetro | type | opcional | descripción|
|--|--|--|--|
| font | array |  | Datos de la fuente de letra |


`returns: MemberCard`

.setUsername(username, color, font)

| parámetro | type | opcional | descripción |
|--|--|--|--|
| username | string | | Nombre de usuario |
| color | string | ✓ | El color del texto |
| font | string | ✓  | La fuente de letra |


`returns: MemberCard`

.setTitle(title, color, font)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| title | string | | Título de la tarjeta |
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

![MemberCardImage](https://media.discordapp.net/attachments/950886048198705222/1001161160646738001/Image.png)


# *`CLASS`* **Ranking:**
.registerFonts(font)
 
| parámetro | type | opcional | descripción|
|--|--|--|--|
| font | array |   | Datos de la fuente de letra |


`returns: Ranking`

.setColors(colors)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| colors | RankingData#colors |   | Colores de los textos |


`returns: Ranking`


.setFonts(fonts)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| fonts | RankingData#fonts |   | Fuentes de letra de los textos |


`returns: Ranking`

.setUsersData(usersData)

| parámetro | type | opcional | descripción|
|--|--|--|--|
| usersData | RankingData#usersData |   | Datos de los usuarios |


`returns: Ranking`

.render()


`returns: Promise<Buffer>`

![RankingImage](https://media.discordapp.net/attachments/950886048198705222/1002390232546672770/Image.png?width=605&height=663)

# *`TYPEDEF`* **CardMemberData**

```ts
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
```ts
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
 fonts?: {
  usernameFont: string,
  nicknameFont: string,
  rankFont: string,
  levelFont: string,
  xpFont: string
 },
 blur?: number,
 radius?: number,
 levelText?: string,
 rankText?: string,
 xpText?: string
}
```

# *`TYPEDEF`* **RankingData**
```ts
{
 colors?: {
  box: string,
  username: string,
  xp: string,
  level: string,
  firstRank: string,
  secondRank: string,
  thirdRank: string
 },
 fonts?: {
  username: string,
  xp: string,
  level: string,
  ranks: string
 },
 usersData?: {
  avatar: string,
  tag: string,
  level: number,
  xp: number,
  max_xp: number,
  top: number
 }[]
}
```