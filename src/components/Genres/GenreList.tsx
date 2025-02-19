import useGenre from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import getCroppedImage from "@/services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import { Genre } from "@/services/genre-service";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { loading, data } = useGenre();
  const textStyle = {
    color: "fg",
    cursor: "pointer",
    fontSize: "md",
    fontWeight: "normal",
    _hover: { textDecoration: "underline", color: "gray.400" },
  };
  return (
    <>
      {loading && <GenreSkeleton />}
      <List.Root gap={2} listStyle="none">
        {data.map((genre) => (
          <HStack key={genre.id} gap={2}>
            <Image
              src={getCroppedImage(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Text {...textStyle} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Text>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
