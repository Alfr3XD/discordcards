const { writeFileSync } = require('fs');
const { join } = require('path');
const discordcards = require('../sources/main');

async function Main() {
    const card = new discordcards.MemberCard()
    .setBox(false)
    
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