import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);
  const [currentPlatform, setCurrentPlatform] = useState<string>("Platforms");

  return (
    <MenuRoot variant="solid">
      <MenuTrigger asChild zIndex="popover">
        <Button variant="outline" size="sm" outline="none">
          {currentPlatform}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformId(platform.id);
              setCurrentPlatform(platform.name);
            }}
            value={platform.name}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};
export default PlatformSelector;
