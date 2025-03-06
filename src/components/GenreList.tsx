import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { Heading, HStack, Image, List, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "@/store";

const GenreList = () => {
  const { isLoading, data } = useGenres();
  const setGenreId = useGameQueryStore(s => s.setGenreId)
  const genreId  = useGameQueryStore(s => s.gameQuery.genreId)
  const genreList = data?.results || [];

  const getTextStyle = {
    color: "fg",
    cursor: "pointer",
    fontSize: "md",
    _hover: { textDecoration: "underline" },
  };

  return (
    <>
      <Heading mb={3} fontSize="2xl" fontWeight="bold" mt={6}>
        Genres
      </Heading>
      {isLoading && <GenreSkeleton />}
      <List.Root gap={3} listStyle="none">
        {genreList.map((genre) => {
          const isSelected = genreId === genre.id;

          return (
            <HStack key={genre.id} gap={2}>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text
                {...getTextStyle}
                fontWeight={isSelected ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Text>
            </HStack>
          );
        })}
      </List.Root>
    </>
  );
};

export default GenreList;
