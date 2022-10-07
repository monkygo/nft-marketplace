import "./App.css";
import Collection from "./features/Collection/Collection";
import Collections from "./features/Collections/Collections";
import { Container } from "./components/styles/Container.styled";
import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  const ROUTES = {
    COLLECTIONS: "/collections",
    COLLECTION: "/collection/:address",
  };

  return (
    <main>
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
  );
}

export default App;
