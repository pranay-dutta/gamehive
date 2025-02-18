import { Card } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const GameCardSkeleton = () => {
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
    >
      <Skeleton height="300px" /> {/*Image skeleton*/}
      <Card.Body gap="2">
        <SkeletonText textStyle="2xl" mt={4}></SkeletonText>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
