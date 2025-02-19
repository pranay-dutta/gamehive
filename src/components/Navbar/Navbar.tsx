import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.png";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

const Navbar = () => {
  const shadow = useColorModeValue("0px 2px 4px rgba(0, 0, 0, 0.05)", "0px 2px 4px rgba(255, 255, 255, 0.05)");

  return (
    <HStack px={4} py={2} justifyContent={"space-between"} boxShadow={shadow}>
      <HStack gap={15}>
        <Image src={logo} boxSize=" 50px" borderRadius="50%"></Image>
        <Text fontWeight="medium">GameHive</Text>
      </HStack>
      <ColorModeButton borderRadius="50%" />
    </HStack>
  );
};

export default Navbar;
