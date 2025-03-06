import { List, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  const skeletons = Array.from({ length: 19 }, (_, i) => i + 1);
  return (
    <List.Root gap={3} listStyle="none">
      {skeletons.map((skeleton) => (
        <Skeleton key={skeleton} height="30px"></Skeleton>
      ))}
    </List.Root>
  );
};

export default GenreSkeleton;
