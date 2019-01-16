import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { people } from "../../../../data/people.json";

import { AppBar } from "../AppBar";
import { Carousel } from "../ex03/Carousel";
import { AllCards } from "./AllCards.js";

export function App() {
  const [showAll, setShowAll] = useState(true);
  const toggle = () => setShowAll(x => !x);

  return (
    <>
      <AppBar>
        <TopAppBarActionItem onClick={toggle}>
          {showAll ? "view_carousel" : "view_module"}
        </TopAppBarActionItem>
      </AppBar>
      {showAll ? <AllCards people={people} /> : <Carousel people={people} />}
    </>
  );
}