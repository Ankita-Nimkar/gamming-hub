import logo from "../assets/logo.webp";
import { Box } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack spacing={4} justifyContent="space-between">
      <Box display={{ base: "none", lg: "block" }}>
        <img src={logo} width={60} />
      </Box>

      <InputGroup className="input-group">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          name="search-game"
          type="text"
          placeholder="Search..."
          className="search-game"
        />
      </InputGroup>
      <Box>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
