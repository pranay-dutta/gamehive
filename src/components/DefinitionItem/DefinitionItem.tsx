import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box my={5}>
      <Heading as="dt" fontSize="xl" color="gray.500">
        {term}
      </Heading>
      <Box as="dd">{children}</Box>
    </Box>
  );
};

export default DefinitionItem;
