import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ lg: "250px 1fr" }}
      gap={6}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        className="aside"
        display={{ base: "none", lg: "block" }}
      >
        <GenresList />
      </GridItem>

      <GridItem area="main" className="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
