import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery?.genreId);
  const platform = usePlatform(gameQuery?.platformId);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;

  return (
    <Box mt={10} mb={8}>
      <Heading lineHeight="1" fontSize="5xl" fontWeight={"bold"}>
        {heading}
      </Heading>
    </Box>
  );
};

export default GameHeading;
