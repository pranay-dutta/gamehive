import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/ui/menu";
import orderings from "@/data/orderings";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const selectedSortOrder = orderings.find((s) => s.name === sortOrder);

  return (
    <MenuRoot variant="solid">
      <MenuTrigger asChild zIndex="popover">
        <Button variant="outline" size="sm" outline="none">
          Order by: {selectedSortOrder?.name || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {orderings.map((ordering) => (
          <MenuItem
            onClick={() => {
              setSortOrder(ordering.slug);
            }}
            value={ordering.name}
            key={ordering.id}
          >
            {ordering.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
export default SortSelector;
