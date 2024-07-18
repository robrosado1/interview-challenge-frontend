import React from 'react';
import PaginationButton from './PaginationButton';

const PAGE_LIMIT = 20;

const PokemonList = () => {
  const [pokemonList, setPokemonList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);

  const fetchPokemonList = async (page) => {
    // TODO: Fetch the list of pokemons based on the current page
    // Use the `limit` variable to determine how many pokemons to fetch
    // Use the `offset` variable to determine the starting index
    // Update the `totalPages` state based on the total number of pokemons
    // Update the `pokemonList` state with the fetched pokemons
    // Handle loading and error states
    const offset = currentPage * PAGE_LIMIT; // TODO: Calculate the offset based on the current page
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${PAGE_LIMIT}&offset=${offset}`);
    const data = await response.json();
    console.log(data);
    setPokemonList(data.results);
    setTotalPages(Math.floor(data.count / PAGE_LIMIT));
  };

  React.useEffect(() => {
    fetchPokemonList();
  }, [currentPage]);

  // TODO: Add loading and error states

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-2">
        <ul>
        {pokemonList.map(pokemon => {
          const pokemonId = pokemon.url; // TODO: Extract the pokemon ID from the URL
          return (
            // TODO: Render each pokemon as a card
            // Add a link to the pokemon details page using the pokemon name. Example: /pokemon/bulbasaur
            // Use the official artwork URL for the pokemon image
            // Use the pokemon name as the link text
            // Add basic styling for the pokemon card using tailwindcss
            <li>
              <div>
                <span>Name: {pokemon.name}</span>
                {" "}
                <img src='' />
              </div>
            </li>
          );
        })}
        </ul>
      </div>
      <div className="flex justify-center mt-4">
        <PaginationButton
          type="Previous"
          page={currentPage + 1}
          setPage={() => {
            if (currentPage > 0) {
              setCurrentPage((prev) => prev - 1);
            } else {
              console.error("Already at beginning of list");
            }
          }} // TODO: Implement the setPage function
        />
        <span className="px-4 py-2 mx-1">{currentPage + 1} / {totalPages}</span>
        <PaginationButton
          type="Next"
          page={currentPage}
          setPage={() => {
            if (currentPage < totalPages) {
              setCurrentPage((prev) => prev + 1);
            } else {
              console.error("Already at end of list");
            }
          }} // TODO: Implement the setPage function
        />
      </div>
    </div>
  );
};

export default PokemonList;
