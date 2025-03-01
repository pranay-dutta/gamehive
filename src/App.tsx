import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import {
  GameGrid,
  GenreList,
  Navbar,
  PlatformSelector,
  SortSelector,
} from "./components";
import { GameHeading } from "./components/GameGrid";

function App() {
  const displayGrid = { base: "none", lg: "block" };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr", // Single column layout on small screens takes full width
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem
        area="aside"
        display={displayGrid}
        w={{ lg: "250px" }}
        py="10px"
        px={5}
      >
        <GenreList />
      </GridItem>

      <GridItem area="main" padding="10px">
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

export default App;
