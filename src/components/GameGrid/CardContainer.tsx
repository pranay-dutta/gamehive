import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return <Box borderRadius={10}>{children}</Box>;
};

export default CardContainer;
