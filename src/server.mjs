import fs from 'fs'
import Librespot from 'librespot'

const spotify = new Librespot();

let a = await spotify.login("danielmendes004@gmail.com", "danny_jmendes");
console.log(a);
const track = await spotify.get.track('1p80LdxRV74UKvL8gnD7ky');
console.log(track);
await fs.promises.writeFile('example.ogg', track.stream);

await spotify.disconnect();
