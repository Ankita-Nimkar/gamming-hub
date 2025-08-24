import getImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";

import {
  VStack,
  Box,
  Spinner,
  StackDivider,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
const GenresList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Spinner />}
      <Text fontSize="xl" as="b">
        Genres
      </Text>
      <VStack
        mt="20px"
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {genres?.map((genre) => (
          <HStack>
            <Image
              borderRadius="30%"
              src={getImageUrl(genre.image_background)}
              boxSize="30px"
            />

            <Box h="40px">{genre.name}</Box>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default GenresList;
