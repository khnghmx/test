import { CoreButton } from "@core/CoreButton";
import React from "react";
import { ReactNode } from "react";

interface EditableTableProps<T extends { id: string }> {
  headers: string[];
  rows: T[];
  isDirty?: boolean;
  children: (row: T) => ReactNode;
  onRowAdd: () => void;
  onRowDelete: (row: T) => void;
  onSave: () => void;
  onCancel: () => void;
}

export default function EditableTable<T extends { id: string }>({
  headers,
  rows,
  isDirty = false,
  children,
  onRowAdd,
  onRowDelete,
  onSave,
  onCancel,
}: EditableTableProps<T>) {
  const columnsCount = headers.length + 1;

  return (
    <div
      className="relative grid-table grid text-bold gap-y-2"
      style={{
        position: "relative",
        gridTemplateColumns: ` repeat(${columnsCount}, minmax(10rem, 1fr))`,
      }}
    >
      {headers.map((title) => (
        <div
          key={title}
          className="text-center sticky top-0 bg-slate-100 font-semibold text-xs text-gray-500 leading-8"
        >
          {title}
        </div>
      ))}
      {/* The column for delete button. */}
      <div className="sticky top-0 bg-slate-100"></div>

      {/* Table rows */}
      {rows.map((row) => (
        <React.Fragment key={row.id}>
          {children(row)}
          <div>
            <CoreButton
              mainStyle="secondary"
              mainColor="red"
              className="flex justify-center items-center"
              onClick={() => onRowDelete(row)}
            >
              x
            </CoreButton>
          </div>
        </React.Fragment>
      ))}

      {!rows.length && (
        <div
          className="text-gray-700"
          style={{
            gridColumnEnd: `span ${columnsCount}`,
          }}
        >
          No data
        </div>
      )}

      {/* Actions bottom panel */}
      <div
        className="sticky bottom-0 flex justify-between items-center w-full bg-slate-50 px-8"
        style={{
          gridColumnEnd: `span ${columnsCount}`,
        }}
      >
        <div className="sticky left-8">
          <CoreButton mainStyle="secondary" onClick={onRowAdd}>
            Add row
          </CoreButton>
        </div>
        <div className="flex gap-4 items-center justify-center sticky right-8">
          {isDirty && (
            <span className="text-sm text-gray-400">
              You have unsaved changes
            </span>
          )}
          <CoreButton
            mainStyle="secondary"
            onClick={onCancel}
            disabled={!isDirty}
          >
            Cancel
          </CoreButton>
          <CoreButton onClick={onSave} mainStyle="primary" disabled={!isDirty}>
            Save
          </CoreButton>
        </div>
      </div>
    </div>
  );
}
