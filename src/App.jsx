import { useState } from 'react';

import PokemonList from './PokemonList.jsx';
import PokemonDetails from './PokemonDetails.jsx';

const App = () => {
  const [singlePokemonDetails, setSinglePokemonDetails] = useState({});

  return (
    <>
      <h1>Pokedex</h1>

      {
        singlePokemonDetails.name ? 
          <PokemonDetails 
            singlePokemonDetails={singlePokemonDetails} 
            setSinglePokemonDetails={setSinglePokemonDetails}
          /> :
          <PokemonList setSinglePokemonDetails={setSinglePokemonDetails} />
      }
    </>
  )
}

export default App