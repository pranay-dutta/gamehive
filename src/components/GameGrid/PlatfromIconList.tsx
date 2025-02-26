import { Platform } from "@/hooks/usePlatforms";
import { Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega, SiAtari } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { GiPlatform, GiGameConsole } from "react-icons/gi";
import { CgDanger } from "react-icons/cg";

const PlatfromIconList = ({ platforms }: { platforms: Platform[] | undefined }) => {
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
      {platforms && platforms.map(
        (platform, idx) =>
          idx <= 4 && ( // Only show first 5 platforms
            <Icon
              key={platform.id}
              as={iconMap[platform.slug] || CgDanger}
              color="gray.500"
            />
          )
      )}
    </HStack>
  );
};

export default PlatfromIconList;
