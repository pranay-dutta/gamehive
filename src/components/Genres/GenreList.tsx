import useGenre from "@/hooks/useGenres";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import getCroppedImage from "@/services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { loading, data } = useGenre();
  return (
    <>
      {loading && <GenreSkeleton />}
      <List.Root gap={3} listStyle="none">
        {data.map((genre) => (
          <HStack key={genre.id} gap={2}>
            <Image
              src={getCroppedImage(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Text fontSize="md">{genre.name}</Text>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
