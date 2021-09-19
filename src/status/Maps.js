import de_ancient from '../assets/images/csgo_maps/de_ancient.jpeg';
import de_cache from '../assets/images/csgo_maps/de_cache.jpg';
import de_dust2 from '../assets/images/csgo_maps/de_dust2.jpg';
import de_inferno from '../assets/images/csgo_maps/de_inferno.jpg';
import de_mirage from '../assets/images/csgo_maps/de_mirage.jpg';
import de_nuke from '../assets/images/csgo_maps/de_nuke.jpg';
import de_overpass from '../assets/images/csgo_maps/de_overpass.jpg';
import de_train from '../assets/images/csgo_maps/de_train.jpg';
import de_vertigo from '../assets/images/csgo_maps/de_vertigo.jpg';

const statusg = [{
    name: 'de_ancient',
    img_Url: de_ancient,
},
{
    name: 'de_cache',
    img_Url: de_cache,
},
{
    name: 'de_dust2',
    img_Url: de_dust2,
},
{
    name: 'de_inferno',
    img_Url: de_inferno,
},
{
    name: 'de_mirage',
    img_Url: de_mirage,
},
{
    name: 'de_nuke',
    img_Url: de_nuke,
},
{
    name: 'de_overpass',
    img_Url: de_overpass,
},
{
    name: 'de_cache',
    img_Url: de_cache,
},
{
    name: 'de_train',
    img_Url: de_train,
},
{
    name: 'de_vertigo',
    img_Url: de_vertigo,
}

]


const mapSinffer = mapgCode =>{

    return statusg.find(x => x.name === mapgCode)
}

export { mapSinffer };