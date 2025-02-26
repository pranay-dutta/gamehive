import { useState } from "react";
import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/Genres";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./services/genre-service";
import { Platform } from "@/hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameGrid/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
  query: string;
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
        <Navbar onSearch={(query) => setGameQuery({ ...gameQuery, query })} />
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
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main" padding="10px">
        <GameHeading gameQuery={gameQuery} />

        <Flex direction="column" gap="25px">
          <HStack gap={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectOrder={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
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
