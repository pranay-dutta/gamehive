import logo from "@/assets/logo.png";
import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack, Image } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (query: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack px={4} py={2}>
      <HStack gap={15}>
        <Image src={logo} boxSize=" 50px" borderRadius="50%"></Image>
      </HStack>
      <SearchInput onSearch={(query) => onSearch(query)} />
      <ColorModeButton borderRadius="50%" />
    </HStack>
  );
};

export default Navbar;
