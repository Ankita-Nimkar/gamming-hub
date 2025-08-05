import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
const GamesGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        minChildWidth="200px"
        spacing="20px"
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        {games?.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
