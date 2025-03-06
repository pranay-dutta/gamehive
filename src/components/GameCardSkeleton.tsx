import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/ui/skeleton";
import CardContainer from "./CardContainer";
const GameCardSkeleton = () => {
  return (
    <CardContainer>
      <Card.Root>
        <Skeleton height="250px" /> {/*Image skeleton*/}
        <Card.Body gap="2">
          <SkeletonText textStyle="2xl" mt={2}></SkeletonText>
        </Card.Body>
      </Card.Root>
    </CardContainer>
  );
};

export default GameCardSkeleton;
