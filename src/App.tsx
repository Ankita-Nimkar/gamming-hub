import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" className="nav-bar" display="flex">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        className="aside"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>

      <GridItem area="main" className="main">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
