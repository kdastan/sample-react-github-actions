import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Main, About } from "./pages";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" exact component={About} />
      </Switch>
    </HashRouter>
  );
}

export default App;
