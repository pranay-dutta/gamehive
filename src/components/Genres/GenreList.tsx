import useGenre from "@/hooks/useGenres";
import getCroppedImage from "@/services/image-url";
import { Heading, HStack, Image, List, Text } from "@chakra-ui/react";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
          const isSelected = selectedGenreId === genre.id;

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
                onClick={() => onSelectGenre(genre.id)}
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
