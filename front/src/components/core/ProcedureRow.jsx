import React from "react";

function ProcedureRow({
  procedureName,
  creationDate,
  createdBy,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid grid-cols-5 text-gray-600 text-center">
      <div className="shadow-sm p-4 font-light tracking-wide">
        {procedureName}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide">
        {creationDate}
      </div>
      <div className="shadow-sm p-4 font-light tracking-wide">{createdBy}</div>
      <div className="shadow-sm px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="border shadow-sm rounded-md py-1 px-6 text-center bg-amber-50 bg-opacity-40 hover:bg-amber-50 hover:text-amber-500 hover:border-amber-100 flex justify-between items-center gap-2"
            onClick={onEdit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
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
      <div className="shadow-sm px-2 font-light text-gray-600 tracking-wide flex justify-center items-center">
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="border shadow-sm rounded-md py-1 px-6 text-center bg-red-50 bg-opacity-40 hover:bg-red-50 hover:text-red-500 hover:border-red-100 flex justify-between items-center gap-2"
            onClick={onDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
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
