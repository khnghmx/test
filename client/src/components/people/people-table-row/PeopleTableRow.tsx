import { Person } from "@app-types/people";
import { CoreInput } from "@core/CoreInput";
import { differenceInYears, parse } from "date-fns";
import { useState } from "react";

interface PeopleTableRowProps {
  person: Person;
  onChange: (data: Person) => void;
}

export const PeopleTableRow = ({ person, onChange }: PeopleTableRowProps) => {
  const [form, setForm] = useState<Person>(person);

  const onDataChange = (field: keyof Person, value: string) => {
    const formData = { ...form, [field]: value };
    setForm(formData);
    onChange(formData);
  };

  const onDateOfBirthChange = (value: string) => {
    if (!/(\d{2})\.(\d{2})\.(\d{4})/.test(value)) {
      onDataChange("dateOfBirth", value);
      return;
    }
    const date = parse(value, "dd.MM.yyyy", new Date());
    const age = differenceInYears(new Date(), date);

    const formData = { ...form, dateOfBirth: value, age };

    setForm(formData);
    onChange(formData);
  };

  return (
    <>
      <div>
        <CoreInput
          value={form.firstName}
          placeholder="John"
          onChange={(value) => onDataChange("firstName", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.lastName}
          placeholder="Doe"
          onChange={(value) => onDataChange("lastName", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.street}
          onChange={(value) => onDataChange("street", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.house}
          onChange={(value) => onDataChange("house", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.apartment}
          onChange={(value) => onDataChange("apartment", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.postalCode}
          onChange={(value) => onDataChange("postalCode", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.town}
          onChange={(value) => onDataChange("town", value)}
        />
      </div>
      <div>
        <CoreInput
          value={form.phone}
          onChange={(value) => onDataChange("phone", value)}
          placeholder="999 999 999"
        />
      </div>
      <div>
        <CoreInput
          value={form.dateOfBirth}
          placeholder="dd.mm.yyyy"
          onChange={onDateOfBirthChange}
        />
      </div>
      <div>{form.age ? form.age : ""}</div>
    </>
  );
};
