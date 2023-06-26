import { Person } from "@app-types/people";
import { peopleAtom } from "@store/atoms/people.atom";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const usePeopleTable = () => {
  const [people, setPeople] = useAtom(peopleAtom);
  const [isDirty, setIsDirty] = useState(false);
  const [data, setData] = useState(people);

  useEffect(() => {
    setData(people);
    setIsDirty(false);
  }, [people]);

  const headers = [
    "First Name",
    "Last Name",
    "Street",
    "House",
    "Apartment",
    "Postal Code",
    "Town",
    "Phone Number",
    "Date of birth",
    "Age",
  ];

  const onRowChange = (person: Person) => {
    const changed = data.map((p) => (p.id === person.id ? { ...person } : p));
    setData(changed);
    setIsDirty(true);
  };

  const onRowDelete = (person: Person) => {
    const changed = data.filter(({ id }) => id !== person.id);
    setData(changed);
    setIsDirty(true);
  };

  const onRowAdd = () => {
    setData([
      ...data,
      {
        id: uuidv4(),
        firstName: "",
        lastName: "",
        street: "",
        house: "",
        apartment: "",
        postalCode: "",
        town: "",
        phone: "",
        dateOfBirth: "",
        age: 0,
      },
    ]);
    setIsDirty(true);
  };

  const onSaveChanges = () => {
    setPeople(data);
    setIsDirty(false);
  };
  const onCancelChanges = () => {
    setData(people);
    setIsDirty(false);
  };

  return {
    state: {
      data,
      headers,
      isDirty,
    },
    actions: {
      onRowAdd,
      onRowChange,
      onRowDelete,
      onSaveChanges,
      onCancelChanges,
    },
  };
};
