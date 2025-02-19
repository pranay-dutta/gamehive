import { useState } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/Genres";
import { Genre } from "./services/genre-service";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { Platform } from "./services/game-service";

function App() {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [platform, setPlatform] = useState<Platform | null>({} as Platform);
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
        <GenreList
          selectedGenre={genre}
          onSelectGenre={(genre) => setGenre(genre)}
        />
      </GridItem>

      <GridItem area="main" padding="10px">
        <Flex direction="column" gap="15px">
          <PlatformSelector
            onSelectPlatform={(platform) => setPlatform(platform)}
          />
          <GameGrid selectedPlatform={platform} selectedGenre={genre} />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
