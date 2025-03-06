import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import {
  GameGrid,
  GenreList,
  PlatformSelector,
  SortSelector,
} from "@/components";
import { GameHeading } from "@/components";

function HomePage() {
  const displayGrid = { base: "none", lg: "block" };
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr", // Single column layout on small screens takes full width
        lg: "250px 1fr",
      }}
    >
      <GridItem area="aside" display={displayGrid} w={{ lg: "250px" }} pr={5}>
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <GameHeading />

        <Flex direction="column" gap="25px">
          <HStack gap={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
