import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="blue.500">
        Nav
      </GridItem>

      <GridItem
        area="aside"
        bg="green.500"
        display={{ base: "none", md: "block" }}
      >
        Aside
      </GridItem>

      <GridItem area="main" bg="pink.500">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
