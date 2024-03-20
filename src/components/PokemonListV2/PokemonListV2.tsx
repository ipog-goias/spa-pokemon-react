import axios from 'axios';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';
import { PokemonService } from '../../service/PokemonService';

const PokemonListV2 = () => {
   //Processamento
   //pokemons = variavel (lista dos pokemons)
   //setPokemons = operação/método de atribuição da variável pokemons
   const [pokemons, setPokemons] = useState([]);

   //============================== PROCESSAMENTO DAS INFORMAÇÕES=============================
   
   useEffect(() => {
      //componente que conecta no serviço(api) para acessar as informações
      //ProductService.getProductsMini().then((data) => setProducts(data));
      PokemonService.getData().then((response: any) => setPokemons(response));
    }, []);

   //método para devolver uma imagem
   const imageBodyFrontDefault = (pokemon: any) => {
      //Precisamos identificar o ID do pokemon
      let id = pokemon.url.split("/")[6] ;

      return <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="w-6rem shadow-2 border-round" />;
      //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
   };

   const imageBodyBackDefault = (pokemon: any) => {
      //Precisamos identificar o ID do pokemon
      let id = pokemon.url.split("/")[6] ;

      return <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`} className="w-6rem shadow-2 border-round" />;
      //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
   };

  //constante com o conteúdo do HEADER (cabeçalho da datable)
  const cabecalho = (
   <div className="flex flex-wrap align-items-center justify-content-between gap-2">
       <span className="text-xl text-900 font-bold">Pokémons</span>
       <Button icon="pi pi-refresh" rounded raised />
   </div>
   );

   //rodapé da datatable
   const rodape = `No total temos ${pokemons ? pokemons.length : 0} pokémons.`;

   //============================== PROCESSAMENTO DAS INFORMAÇÕES=============================

   //retorno do 'template'
   return (
      <div className="card">
            <DataTable value={pokemons} header={cabecalho} footer={rodape} tableStyle={{ minWidth: '60rem' }}>
               <Column field="name" header="Name"></Column>
               <Column header="Front Default" body={imageBodyFrontDefault}></Column>
               <Column header="Back Default" body={imageBodyBackDefault}></Column>
            </DataTable>
      </div>
   );

};

export default PokemonListV2;
