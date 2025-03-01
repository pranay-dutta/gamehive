import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Box, Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

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
