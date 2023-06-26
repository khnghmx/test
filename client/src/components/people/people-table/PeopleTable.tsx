import EditableTable from "@elements/table/EditableTable";
import { PeopleTableRow } from "../people-table-row/PeopleTableRow";
import { usePeopleTable } from "./usePeopleTable";
import { Person } from "@app-types/people";

export default function PeopleTable() {
  const {
    state: { data, headers, isDirty },
    actions: {
      onRowAdd,
      onRowChange,
      onRowDelete,
      onSaveChanges,
      onCancelChanges,
    },
  } = usePeopleTable();

  return (
    <EditableTable<Person>
      rows={data}
      headers={headers}
      isDirty={isDirty}
      onSave={onSaveChanges}
      onRowAdd={onRowAdd}
      onRowDelete={onRowDelete}
      onCancel={onCancelChanges}
    >
      {(person) => (
        <PeopleTableRow
          key={person.id}
          person={person}
          onChange={onRowChange}
        />
      )}
    </EditableTable>
  );
}
