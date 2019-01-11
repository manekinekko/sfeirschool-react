import React from "react";

import { people } from "../../data/people.json";

import { AppBar } from "../solution/components/AppBar";
import { ListAll } from "./components/ListAll.js";

export const App = () => (
  <>
    <AppBar />
    <ListAll people={people} />
  </>
);
