import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../solution/Header";
import { SearchableList } from "./SearchableList";
import { Player } from "./Player";
import { Person } from "./Person";

const RouteActionItem = ({ to, children }) => (
  <Route path={to}>
    {({ history, match }) => (
      <TopAppBarActionItem onClick={() => !match && history.push(to)}>
        {children}
      </TopAppBarActionItem>
    )}
  </Route>
);

export const App = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then(res => res.json())
      .then(setPeople);
  }, []);

  return (
    <>
      <Header>
        <RouteActionItem to="/player">view_carousel</RouteActionItem>
        <RouteActionItem to="/list">view_module</RouteActionItem>
      </Header>
      <Switch>
        <Route path="/list" render={() => <SearchableList people={people} />} />
        <Route path="/player" render={() => <Player people={people} />} />
        <Route
          path="/person/:id"
          render={({ match }) => (
            <Person person={people.find(p => p.id === match.params.id)} />
          )}
        />
        <Redirect to="/list" />
      </Switch>
    </>
  );
};