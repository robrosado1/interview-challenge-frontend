import React from 'react';
import PaginationButton from './PaginationButton';

const PAGE_LIMIT = 20;

const PokemonList = () => {
  const pokemonList = []; // TODO: Use the `pokemonList` state
  const currentPage = 1; // TODO: Use the `currentPage` state
  const totalPages = 0; // TODO: Use the `totalPages` state

  const fetchPokemonList = async (page) => {
    // TODO: Fetch the list of pokemons based on the current page
    // Use the `limit` variable to determine how many pokemons to fetch
    // Use the `offset` variable to determine the starting index
    // Update the `totalPages` state based on the total number of pokemons
    // Update the `pokemonList` state with the fetched pokemons
    // Handle loading and error states
    const offset = 0; // TODO: Calculate the offset based on the current page
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=`);
    const data = await response.json();
  };

  // TODO: Add loading and error states

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        {pokemonList.map(pokemon => {
          const pokemonId = pokemon.url; // TODO: Extract the pokemon ID from the URL
          return (
            // TODO: Render each pokemon as a card
            // Add a link to the pokemon details page using the pokemon name. Example: /pokemon/bulbasaur
            // Use the official artwork URL for the pokemon image
            // Use the pokemon name as the link text
            // Add basic styling for the pokemon card using tailwindcss
            <div></div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4">
        <PaginationButton
          type="Previous"
          page={currentPage}
          setPage={() => {}} // TODO: Implement the setPage function
        />
        <span className="px-4 py-2 mx-1">{currentPage} / {totalPages}</span>
        <PaginationButton
          type="Next"
          page={currentPage}
          setPage={() => {}} // TODO: Implement the setPage function
        />
      </div>
    </div>
  );
};

export default PokemonList;
