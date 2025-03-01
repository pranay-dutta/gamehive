import { InputGroup } from "@/components/ui/input-group";
import useGameQueryStore from "@/store";
import { HStack, Input, Kbd } from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { LuSearch } from "react-icons/lu";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);

  useHotkeys( "/",
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
            e.key === "Enter" &&
            inputRef.current?.value &&
            setSearchText(inputRef.current.value)
          }
        />
      </InputGroup>
    </HStack>
  );
};
export default SearchInput;
