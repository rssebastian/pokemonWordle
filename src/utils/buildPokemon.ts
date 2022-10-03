// Takes in the id of a Pokemon or the string and builds a Pokemon object

import axios from 'axios';
import {Pokemon} from '../interfaces'

type Args = string | number;

const buildPokemon = async (id:Args):Promise<Pokemon> => {
    const pokemon = {} as Pokemon;
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const additionalData = await (await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)).data;
        pokemon["name"] = data["name"];
        pokemon["img"] = data["sprites"]["other"]["official-artwork"]["front_default"];
        pokemon["types"] = data["types"].map((type:any) => type["type"]["name"]);
        pokemon["mainColor"] = additionalData["color"]["name"];
        pokemon["eggGroups"] = additionalData["egg_groups"].map((group:any) => group["name"]);
        pokemon["shape"] = additionalData["shape"]["name"];
        pokemon["generation"] = additionalData["generation"]["name"].split("-")[1];

    } catch (error) {
        console.error("Error in building a Pokemon...", error)
    }
    return pokemon;
}

export default buildPokemon;