import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/ui/menu";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <MenuRoot variant="solid">
      <MenuTrigger asChild zIndex="popover">
        <Button variant="outline" size="sm" outline="none">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformId(platform.id);
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
