import { GameQuery } from "@/App";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.genre?.name || ""} ${
    gameQuery?.platform?.name || ""
  } Games`;
  return (
    <Box mt={10} mb={8}>
      <Heading lineHeight="1" fontSize="5xl" fontWeight={"bold"}>
        {heading}
      </Heading>
    </Box>
  );
};

export default GameHeading;
