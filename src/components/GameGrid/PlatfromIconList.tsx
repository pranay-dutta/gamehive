import { Platform } from "@/services/game-service";
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
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { GiPlatform } from "react-icons/gi";

const PlatfromIconList = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap: { [key: string]: IconType } = {
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    pc: FaWindows,
    playstation: FaPlaystation,
    sega: SiSega,
    web: BsGlobe,
    xbox: FaXbox,
    "neo-geo": GiPlatform,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatfromIconList;
