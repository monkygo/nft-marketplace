import "./App.css";
import Collection from "./features/Collection/Collection";
import Collections from "./features/Collections/Collections";
import { Container } from "./components/styles/Container.styled";
import { Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  const ROUTES = {
    COLLECTIONS: "/collections",
    COLLECTION: "/collection/:address",
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.COLLECTIONS} />
          </Route>
          <Route path={ROUTES.COLLECTIONS}>
            <Collections />
          </Route>
          <Route path={ROUTES.COLLECTION}>
            <Container>
              <Collection />
            </Container>
          </Route>
        </Switch>
      </main>
    </ThemeProvider>
  );
}

export default App;
