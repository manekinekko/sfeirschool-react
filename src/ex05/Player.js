import React, { useState } from "react";
import { Fab } from "@rmwc/fab";
import { cycleNext, cyclePrev } from "../utils";
import { PersonCard } from "../solution/PersonCard";

const Carousel = ({ children }) => {
  const childArray = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = cycleNext(0, childArray.length - 1);
  const prev = cyclePrev(0, childArray.length - 1);

  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini onClick={() => setCurrentIndex(prev)} />
      {childArray[currentIndex]}
      <Fab icon="skip_next" mini onClick={() => setCurrentIndex(next)} />
    </div>
  );
};

export const Player = ({ people }) => {
  return (
    <>
      <main>
        <Carousel>
          {people.map(person => (
            <PersonCard person={person} key={person.id} />
          ))}
        </Carousel>
      </main>
      <footer>
        <Fab icon="play_arrow" />
      </footer>
    </>
  );
};