import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
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
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
