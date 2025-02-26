import useGenre from "@/hooks/useGenres";
import { Heading, HStack, Image, List, Text } from "@chakra-ui/react";
import getCroppedImage from "@/services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "@/services/genre-service";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { isLoading, data } = useGenre();
  const genreList = data?.results || [];

  const getTextStyle = {
    color: "fg",
    cursor: "pointer",
    fontSize: "md",
    _hover: { textDecoration: "underline" },
  };

  return (
    <>
      <Heading mb={3} fontSize="2xl" fontWeight="bold" mt={10}>
        Genres
      </Heading>
      {isLoading && <GenreSkeleton />}
      <List.Root gap={3} listStyle="none">
        {genreList.map((genre) => {
          const isSelected = selectedGenre?.name === genre.name;

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
                onClick={() => onSelectGenre(genre)}
              >
                {" "}
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
