import { type Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
interface Props {
  game: Game;
}
import getImageUrl from "../services/image-url";
const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm" key={game.id} borderRadius={10} overflow="hidden">
      <Image src={getImageUrl(game.background_image)} />
      <CardBody>
        <Stack>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
              key={game.id}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading size="md">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
