import { HStack, Input, Kbd } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from "react";

interface Props {
  onSearch: (query: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys(
    "/",
    () => {
      inputRef.current?.focus();
    },
    { preventDefault: true }
  );
  return (
    <HStack gap="10" w="full">
      <InputGroup
        flex="1"
        startElement={<LuSearch />}
        endElement={<Kbd>/</Kbd>}
      >
        <Input
          ref={inputRef}
          placeholder="Search games . . ."
          onKeyDown={(e) =>
            e.key === "Enter" && onSearch(inputRef.current?.value || "")
          }
        />
      </InputGroup>
    </HStack>
  );
};
export default SearchInput;
