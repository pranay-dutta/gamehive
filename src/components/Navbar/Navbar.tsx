import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar = () => {
  return (
    <HStack px={4} justifyContent={"space-between"} boxShadow="xs">
      <HStack gap={15}>
        <Image src={logo} boxSize=" 50px" borderRadius="50%"></Image>
        <Text>Navbar</Text>
      </HStack>
      <ColorModeButton borderRadius="50%" />
    </HStack>
  );
};

export default Navbar;
