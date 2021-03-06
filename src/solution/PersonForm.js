import React from "react";
import { Card, CardContent, CardActions, CardAction } from "./Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { Formik, useField, Field } from "formik";

const PersonFields = () => {
  const [firstname] = useField("firstname");
  const [lastname] = useField("lastname");
  const [position] = useField("position");
  const [phone] = useField("phone");
  const [email] = useField("email");
  return (
    <CardContent type="person-form">
      <TextField label="first name" {...firstname} />
      <TextField label="last name" {...lastname} />
      <Select
        label="position"
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources"
        ]}
        {...position}
      />
      <TextField label="phone" {...phone} />
      <TextField label="email" {...email} />
    </CardContent>
  );
};

export const PersonForm = ({ person, onSubmit, onReset }) => {
  return (
    <Card>
      <Formik initialValues={person} onSubmit={onSubmit} onReset={onReset}>
        {({ handleSubmit, handleReset, dirty, isValid }) => {
          return (
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <PersonFields />
              <CardActions>
                <CardAction type="submit" disabled={!isValid || !dirty}>
                  save
                </CardAction>
                <CardAction type="reset">cancel</CardAction>
              </CardActions>
            </form>
          );
        }}
      </Formik>
    </Card>
  );
};
