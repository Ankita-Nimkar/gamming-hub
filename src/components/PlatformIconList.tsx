import type { Platform } from "@/hooks/useGames";
import { Text, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
interface Props {
  platforms: Platform[];
}
interface IconMap {
  [key: string]: React.ElementType; // Defines that keys are strings and values are strings
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMapping: IconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    ios: MdPhoneIphone,
    linux: FaLinux,
    nintendo: SiNintendo,
    mac: ImAppleinc,
    web: BsGlobe,
  };

  return (
    <HStack spacing="6px">
      {platforms.map((p) => {
        const status = p.slug;

        const IconName = iconMapping[status];
        return (
          <Text color="gray.500" key={p.id}>
            {IconName && <IconName />}
          </Text>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
