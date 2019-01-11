import React from "react";

import { PersonCard } from "../../solution/components/PersonCard";

export function ListAll({ people }) {
  return (
    <main>
      {people.map(person => (
        <PersonCard person={person} />
      ))}
    </main>
  );
}
