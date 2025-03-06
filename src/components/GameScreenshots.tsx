import useGameScreenshots from "@/hooks/useGameScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);
  if (!data?.results) return null;
  if (error) throw error;

  const screenshots = data.results;

  return (
    <>
      {isLoading && <p>Loading screenshots ...</p>}

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
        {screenshots.map((file) => {
          return <Image key={file.id} src={file.image} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
