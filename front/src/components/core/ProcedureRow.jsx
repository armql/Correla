import React from "react";

function ProcedureRow({
  procedureType,
  procedureName,
  creationDate,
  createdBy,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid grid-cols-6 items-center bg-white text-center text-gray-600 lg:overflow-y-auto">
      <div className="p-4 tracking-wide text-sky-500 shadow-sm">
        {procedureType}
      </div>
      <div className="p-4 font-light tracking-wide shadow-sm">
        {procedureName}
      </div>
      <div className="p-4 font-light tracking-wide shadow-sm">
        {creationDate}
      </div>
      <div className="p-4 font-light tracking-wide shadow-sm">{createdBy}</div>
      <div className="flex items-center justify-center p-3 font-light tracking-wide text-gray-600 shadow-sm">
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-between gap-2 rounded-md border bg-amber-50 bg-opacity-40 px-6 py-1 text-center shadow-sm hover:border-amber-100 hover:bg-amber-50 hover:text-amber-500 active:border-amber-200 active:bg-amber-100"
            onClick={onEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 font-light tracking-wide text-gray-600 shadow-sm">
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-between gap-2 rounded-md border bg-red-50 bg-opacity-40 px-6 py-1 text-center shadow-sm hover:border-red-100 hover:bg-red-50 hover:text-red-500 active:border-red-200 active:bg-red-100"
            onClick={onDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProcedureRow;
