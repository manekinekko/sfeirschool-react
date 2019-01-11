import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { PersonCard } from "../../solution/components/PersonCard";

const succ = (current, min, max) => (current === max ? min : current + 1);
const pred = (current, min, max) => (current === min ? max : current - 1);

const getPreviousPersonIndex = (people, currentIndex) =>
  pred(currentIndex, 0, people.length - 1);

const getNextPersonIndex = (people, currentIndex) =>
  succ(currentIndex, 0, people.length - 1);

export function Carousel({ people }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(
    Math.floor(Math.random() * people.length)
  );

  return (
    <>
      <PersonCard person={people[currentPersonIndex]} />
      <footer>
        <Fab
          icon="skip_previous"
          mini
          onClick={() =>
            setCurrentPersonIndex(
              getPreviousPersonIndex(people, currentPersonIndex)
            )
          }
        />
        <Fab
          icon="skip_next"
          mini
          onClick={() =>
            setCurrentPersonIndex(
              getNextPersonIndex(people, currentPersonIndex)
            )
          }
        />
      </footer>
    </>
  );
}