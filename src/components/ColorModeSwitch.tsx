import { useColorMode, Switch } from "@chakra-ui/react";
const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Switch
        colorScheme={colorMode === "light" ? "gray" : "green"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "light" ? "light " : "dark"}
    </>
  );
};

export default ColorModeSwitch;
