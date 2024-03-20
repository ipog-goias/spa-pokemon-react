import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const PokemonList = () => {
   //pokemons é a variável que irá receber os dados;
   //setPokemons é o método/operação que atribuo valor para a variável pokemons.
   const [pokemons, setPokemons] = useState([]);
 //============================== PROCESSAMENTO DAS INFORMAÇÕES=============================
  //Neste utilizand o axios que é um componente para fazer o consumo de serviço
   useEffect(() => {
     axios //componente que conecta no serviço(api) para acessar as informações
       .get("https://pokeapi.co/api/v2/pokemon/") //obtendo dados da API
       .then((response) => setPokemons(response.data.results));
       //response.data é o retorno da API.
       //response da API pokemon devolve isto:
       /*{
         "count":1302, //response.data.count
         "next":"https://pokeapi.co/api/v2/pokemon?offset=20&limit=20", //response.data.next
         "previous":null, //response.data.previous
         "results":[ //response.data.results
            {
               "name":"bulbasaur",
               "url":"https://pokeapi.co/api/v2/pokemon/1/"
            },
         ]
      }*/

   }, []);
 //============================== PROCESSAMENTO DAS INFORMAÇÕES=============================
 
 //============================== EXIBINDO AS INFORMAÇÕES=============================
   return (
     <div>
       <DataTable value={pokemons}>
         <Column field="name" header="Name"></Column>
         <Column
           field="url"
           header="Details"
           body={(rowData) => ( //rowData é o conteúdo da linha
             <a href={`/pokemon/${parseInt(rowData.url.split("/")[6])}`} 
             target="_self" rel="noreferrer">
               Details
             </a>
           )}
         ></Column>
       </DataTable>
     </div>
   );
 };

export default PokemonList;
