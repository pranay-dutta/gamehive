import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";
import { Platform } from "@/services/game-service";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();
  const [currentPlatform, setCurrentPlatform] = useState<string>("Platforms");
  return (
    <div>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm" outline="none">
            {currentPlatform}
            <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {data.map((platform) => (
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
    </div>
  );
};
export default PlatformSelector;
