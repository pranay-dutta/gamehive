import logo from "@/assets/logo.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <HStack px={4} py={2}>
      <HStack gap={15}>
        <Link to="/">
          <Box boxSize="50px" borderRadius="50%">
            <Image src={logo}></Image>
          </Box>
        </Link>
      </HStack>
      <SearchInput />
      <ColorModeButton borderRadius="50%" />
    </HStack>
  );
};

export default Navbar;
