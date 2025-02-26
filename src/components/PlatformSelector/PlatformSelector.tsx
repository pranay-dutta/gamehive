import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();
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
              onSelectPlatform(platform);
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
