import { type Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Image,
  Badge,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" key={game.id} borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Stack>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              key={game.id}
            />
            <Badge colorScheme="green">{game.metacritic}</Badge>
          </HStack>
          <Heading size="md">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
