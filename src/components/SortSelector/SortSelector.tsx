import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

interface Props {
  onSelectOrder: (ordering: string) => void;
}
const SortSelector = ({ onSelectOrder }: Props) => {
  const orderings = [
    { id: 1, slug: "", name: "Relevance" },
    { id: 2, slug: "-added", name: "Date added" },
    { id: 3, slug: "name", name: "Name" },
    { id: 4, slug: "-released", name: "Release date" },
    { id: 5, slug: "-metacritic", name: "Popularity" },
    { id: 6, slug: "-rating", name: "Average rating" },
  ];
  const [currentOrder, setCurrentOrder] = useState<string>("Relevance");
  return (
    <div>
      <MenuRoot>
        <MenuTrigger asChild>
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
    </div>
  );
};
export default SortSelector;
