import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((g) => g.id == gameQuery?.genreId);
  const platform = platforms.results.find((p) => p.id == gameQuery?.platformId);

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
