import fs from 'fs'
import Librespot from './index.js'

const spotify = new Librespot()



console.log(a)

const track =  spotify.get.track('1p80LdxRV74UKvL8gnD7ky')

console.log(track)

 fs.promises.writeFile('example.ogg', track.stream)

 spotify.disconnect()
