import logo from "../assets/logo.webp";
import { Box } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack spacing={4} justifyContent="space-between">
      <Box>
        <img src={logo} width={60} />
      </Box>
      <form className="navbar-form">
        <InputGroup className="input-group" width="100%">
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
      </form>

      <Box>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default NavBar;
