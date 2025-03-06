import { Platform } from "@/hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { GiGameConsole, GiPlatform } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";

const PlatfromIconList = ({
  platforms,
}: {
  platforms: Platform[] | undefined;
}) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    atari: SiAtari,
    "commodore-amiga": GiGameConsole,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    "neo-geo": GiPlatform,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    sega: SiSega,
    web: BsGlobe,
    xbox: FaXbox,
    danger: CgDanger,
  };
  return (
    <HStack display={"flex"}>
      {platforms &&
        platforms.map(
          (platform, idx) =>
            idx <= 4 && ( // Only show first 5 platforms
              <Icon
                key={platform.id}
                as={iconMap[platform.slug] || CgDanger} //if no platform icon is available display CgDanger
                color="gray.500"
              />
            )
        )}
    </HStack>
  );
};

export default PlatfromIconList;
