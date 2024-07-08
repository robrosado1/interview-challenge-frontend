import React from 'react';

const PokemonDetails = () => {
  // TODO: Extract the `name` parameter from the URL

  const pokemonDetails = null; // TODO: Use the `pokemonDetails` state


  const fetchPokemonDetails = async () => {
    // TODO: Fetch the details of the selected pokemon
    // Update the `pokemonDetails` state with the fetched details
    // Handle loading and error states
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();
  };

  // TODO: Add loading and error states

  return (
    // TODO: Render the pokemon details
    // Display the pokemon name, ID, height, weight, and other details
    // Use the official artwork URL for the pokemon image
    // Add basic styling for the pokemon details using tailwindcss
    // Bonus: Add a loading spinner while fetching the details
    <div></div>
  );
};

export default PokemonDetails;
