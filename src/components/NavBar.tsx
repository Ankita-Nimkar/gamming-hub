import logo from "../assets/logo.webp";
import { useColorMode, Box } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Switch } from "@chakra-ui/react";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box display={{ base: "none", lg: "block" }}>
        <img src={logo} width={80} />
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
        {" "}
        <Switch
          colorScheme={colorMode === "light" ? "green" : "purple"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </Box>
    </>
  );
};

export default NavBar;
