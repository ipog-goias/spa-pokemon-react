import axios from "axios"

export const PokemonService = {

    /**
     * 
     * @returns Lista de Pokemons
     */
    getData(): any{
         //componente que conecta no serviço(api) para acessar as informações
        return axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => {
            return response.data.results
        });
    }
}