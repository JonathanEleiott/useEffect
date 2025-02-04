import { useState, useEffect } from 'react';

const PokemonList = (props) => {
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

  const getPokemonDetails = async(pokemonDetailsUrl) => {
    const response = await fetch(pokemonDetailsUrl);
    const retrievedPokemonDetails = await response.json();
    props.setSinglePokemonDetails(retrievedPokemonDetails);
  }

  return (
    <ol>
      {
        allPokemon.map(({ name, url }) => {
          return (
            <li 
              key={url} 
              onClick={() => { getPokemonDetails(url) }} 
            >
              {name}
            </li>
          )
        })
      }
    </ol>
  )
}

export default PokemonList