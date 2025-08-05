import { type Game } from "../hooks/useGames";
import { Card, CardBody, Stack, Heading, Text, Image } from "@chakra-ui/react";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" key={game.id} borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {game.metacritic}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
