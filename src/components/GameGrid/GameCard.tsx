import { Game } from "@/entitites/Game";
import getCroppedImage from "@/services/image-url";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { CriticScore, PlatfromIconList } from "./";
import CardContainer from "./CardContainer";
import { Link } from "react-router-dom";

const GameCard = ({ game }: { game: Game }) => {
  const placeHolder = "https://placehold.co/600x400";
  return (
    <CardContainer>
      <Card.Root
        overflow="hidden"
        transition="scale 0.3s ease-in-out"
        _hover={{ scale: 1.02 }}
      >
        <Image src={getCroppedImage(game.background_image) || placeHolder} />
        <Card.Body>
          <HStack justifyContent="space-between">
            {/*Render platform icons for the game*/}

            <PlatfromIconList
              platforms={game.parent_platforms?.map((p) => p.platform)}
            />

            {/*Render metacritic score*/}
            <CriticScore score={game.metacritic} />
          </HStack>

          {/*Link to game detail page*/}
          <Heading
            transition="color 0.2s ease-in-out"
            cursor="pointer"
            _hover={{ color: "gray.500" }}
            textStyle="2xl"
            mt="2"
          >
            <Link style={{ color: "inherit" }} to={"/games/" + game.slug}>
              {game.name}
            </Link>
          </Heading>
        </Card.Body>
      </Card.Root>
    </CardContainer>
  );
};
export default GameCard;
