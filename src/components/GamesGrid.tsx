import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
const GamesGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Spinner />}
      <SimpleGrid
        minChildWidth="200px"
        spacing="20px"
        columns={{ base: 1, md: 2, lg: 3 }}
      >
        {games?.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
