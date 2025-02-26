import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import orderings from "@/data/orderings";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (ordering: string) => void;
}
const SortSelector = ({ onSelectOrder }: Props) => {
  const [currentOrder, setCurrentOrder] = useState<string>("Relevance");
  return (
    <MenuRoot variant="solid">
      <MenuTrigger asChild zIndex="popover">
        <Button variant="outline" size="sm" outline="none">
          Order by: {currentOrder}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {orderings.map((ordering) => (
          <MenuItem
            onClick={() => {
              onSelectOrder(ordering.slug);
              setCurrentOrder(ordering.name);
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
