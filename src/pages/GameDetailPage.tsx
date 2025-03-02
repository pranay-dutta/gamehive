import useGameDetail from "@/hooks/useGameDetail";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, isLoading } = useGameDetail(slug);

  return (
    <Box>
      {isLoading && <Heading fontSize="5xl">Loading...</Heading>}
      <Heading mb={5} size="5xl">
        {gameDetail?.name}
      </Heading>
      <Text>{gameDetail?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
