import { InputGroup } from "@/components/ui/input-group";
import { HStack, Input, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { LuSearch } from "react-icons/lu";

interface Props {
  onSearch: (query: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys("/", () => {
      inputRef.current?.focus();
    }, { preventDefault: true }
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
          onKeyDown={(e) => e.key === "Enter" && onSearch(inputRef.current?.value || "") // Click Enter: callback onSearch
          }
        />
      </InputGroup>
    </HStack>
  );
};
export default SearchInput;
