import React, { useState, useContext } from "react";
import { PersonCard } from "../solution/PersonCard";
import { CardActions, CardAction } from "../solution/Card";

import { usePeople } from "./PeopleContext";
import { PersonForm } from "./PersonForm";

export const Person = ({ match }) => {
  const [editing, setEditing] = useState(false);
  const { getPersonById } = usePeople();
  const person = getPersonById(match.params.id);

  const card = editing ? (
    <PersonForm person={person} onReset={() => setEditing(false)} />
  ) : (
    <PersonCard person={person}>
      <CardActions>
        <CardAction onClick={() => setEditing(true)}>edit</CardAction>
      </CardActions>
    </PersonCard>
  );

  return (
    <main>{person ? card : `404 - no person with id ${match.params.id}`}</main>
  );
};
