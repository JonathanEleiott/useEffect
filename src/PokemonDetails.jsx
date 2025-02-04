const PokemonDetails = (props) => {

  return (
    <section>
      <h2>{props.singlePokemonDetails.name}</h2>

      <img src={props.singlePokemonDetails.sprites.front_default} />

      <button onClick={() => { props.setSinglePokemonDetails({}) }}>Back</button>
    </section>
  )
}

export default PokemonDetails;