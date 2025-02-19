import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { PlatfromIconList, CriticScore } from "./";
import { Game } from "@/services/game-service";
import getCroppedImage from "@/services/image-url";
import CardContainer from "./CardContainer";

const GameCard = ({ game }: { game: Game }) => {

  return (
    <CardContainer>
      <Card.Root overflow="hidden" transition="scale 0.3s ease-in-out" _hover={{ scale: 1.02 }}>
        <Image src={getCroppedImage(game.background_image)} />
        <Card.Body>
          <HStack justifyContent="space-between">
            {/*Render platform icons for the game*/}

            <PlatfromIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />

            {/*Render metacritic score*/}
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading
            transition="color 0.2s ease-in-out"
            cursor="pointer"
            _hover={{ color: "gray.500" }}
            textStyle="2xl"
            mt="2"
          >
            {game.name}
          </Heading>
        </Card.Body>
      </Card.Root>
    </CardContainer>
  );
};
export default GameCard;
