import { useState } from "react";
import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/Genres";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./services/genre-service";
import { Platform } from "./services/game-service";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genre: genre })
          }
        />
      </GridItem>
      1
      <GridItem area="main" padding="10px">
        <Flex direction="column" gap="15px">
          <HStack gap={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            />
            <SortSelector
              onSelectOrder={(ordering) =>
                setGameQuery({ ...gameQuery, ordering: ordering})
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
