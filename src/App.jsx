import { useEffect, useState } from 'react';

const App = () => {
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
    <>
      <h1>Pokedex</h1>

      <ol>
        {
          allPokemon.map(({ name, url }) => {
            return <li key={url} >{name}</li>
          })
        }
      </ol>
    </>
  )
}

export default App