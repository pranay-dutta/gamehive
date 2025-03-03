import { ExpandableText } from "@/components";
import useGame from "@/hooks/useGame";
import { Badge, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: gameDetail, isLoading, error } = useGame(slug);

  if (error || !gameDetail) return null;

  return (
    <Box>
      {isLoading && <Heading fontSize="5xl">Loading...</Heading>}
      <Heading mb={5} size="5xl">
        {gameDetail?.name}
      </Heading>
      <ExpandableText children={gameDetail?.description_raw} />
      <Grid
        gap={20}
        my={20}
        templateAreas={{
          base: `"platforms" 
                "metascore" 
                "genres" 
                "publishers"`,
          lg: `"platforms metascore" 
               "genres publishers"`,
        }}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      >
        <GridItem area="platforms">
          <Heading color="gray.400">Parrent Platforms</Heading>
          {gameDetail?.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </GridItem>

        <GridItem area="metascore">
          <Heading color="gray.400">Metascore</Heading>
          <Badge colorPalette="green" size="lg">{gameDetail.metacritic}</Badge>
        </GridItem>

        <GridItem area="genres">
          <Heading color="gray.400">Genres</Heading>
          {gameDetail.genres.map((g) => (
            <Text key={g.id}>{g.name} </Text>
          ))}
        </GridItem>

        <GridItem area="publishers">
          <Heading color="gray.400">Publishsers</Heading>
          {gameDetail.publishers.map((pub) => (
            <Text key={pub.id}>{pub.name} </Text>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GameDetailPage;
