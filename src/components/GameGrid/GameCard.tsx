import { Button, Card, HStack, Image } from "@chakra-ui/react";
import { PlatfromIconList, CriticScore } from "./";
import { Game } from "@/services/game-service";
import getCroppedImage from "@/services/image-url";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root
      width={{
        base: "80vw",
        sm: "80vw",
        md: "40vw",
        lg: "21vw",
        xl: "18vw",
        "2xl": "19vw",
      }}
      overflow="hidden"
      transition="scale 0.3s ease-in-out"
      _hover={{ scale: 1.04 }}
    >
      <Image src={getCroppedImage(game.background_image)} />
      <Card.Body gap="2">
        <Card.Title
          transition="color 0.2s ease-in-out"
          cursor="pointer"
          _hover={{ color: "gray.500" }}
          textStyle="2xl"
          fontWeight="bolder"
          letterSpacing="tight"
          mt="2"
        >
          {game.name}
        </Card.Title>

        <HStack justifyContent="space-between">
          {/*Render platform icons for the game*/}
          <PlatfromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />

          {/*Render metacritic score*/}
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};
export default GameCard;
