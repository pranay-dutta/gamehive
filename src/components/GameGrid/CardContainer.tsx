import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return <Box w="300px" >{children}</Box>;
};

export default CardContainer;
