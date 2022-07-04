const { writeFileSync } = require('fs');
const { join } = require('path');
const discordcards = require('../sources/main');

async function Main() {
    const card = new discordcards.LevelCard()
    .setLevel(10, "#ffffff", "Nivel {level}")
    .setCurrentBarColor([{hex: "#fc1100", position: 0}, {hex: "#00ff00", position: 1}])
    .setXp(1123, 1541)
    return await card.render()
}
Main()
.then((buffer) => {
    writeFileSync(join(__dirname, './Image.png'), buffer);
    console.log("[ TEST ]: Imagen actualizada.");
})
.catch((err) => {
    console.log("[ TEST ]: Error al actualizar la imagen.");
    console.log(err);
});