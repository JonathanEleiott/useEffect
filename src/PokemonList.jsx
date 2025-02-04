import { useState, useEffect } from 'react';

const PokemonList = () => {
  const [ allPokemon, setAllPokemon ] = useState([]);
  
  useEffect(() => {
    // Get the pokemon
    const getPokemon = async() => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const jsonObj = await response.json();
      const retrievedPokemon = jsonObj.results;
      // store the pokemon
      setAllPokemon(retrievedPokemon);
    }

    getPokemon();
  }, []);

  return (
    <ol>
      {
        allPokemon.map(({ name, url }) => {
          return <li key={url} >{name}</li>
        })
      }
    </ol>
  )
}

export default PokemonList