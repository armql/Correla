import React, { Fragment, useEffect, useState } from "react";
import ProcedureRow from "../core/ProcedureRow";
import Swal from "sweetalert2";
import axiosClient from "../../api/axios";
import Pagination from "../custom/Pagination";
import ProdTable_skeleton from "../skeleton/ProdTable_skeleton";
import { useNavigate } from "react-router-dom";

export default function ProcedureTable() {
  const [loading, setLoading] = useState(true);
  const [loadingCreator, setLoadingCreator] = useState(false);
  const [procedure, setProcedure] = useState([]);
  const [users, setUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [proceduresPerPage] = useState(10);
  const [reloadTable, setReloadTable] = useState(false);
  const navigate = useNavigate();

  const fetchProcedures = () => {
    axiosClient
      .get(`/procedures?page=${currentPage}&perPage=10`)
      .then((response) => {
        setProcedure(response.data.procedures);
        setLoading(false);

        const totalProcedures = response.data.total;
        const totalPages = Math.ceil(totalProcedures / proceduresPerPage);
        setTotalPages(totalPages);

        setLoadingCreator(true);
        Promise.all(
          response.data.procedures.map((item) =>
            axiosClient
              .get(`users/${item.created_by}/name`)
              .then((res) => {
                const name = res.data.name;
                setUsers((prevState) => ({
                  ...prevState,
                  [item.user_id]: name,
                }));
              })
              .catch((error) => {
                console.error(error);
              }),
          ),
        ).then(() => {
          setLoadingCreator(false);
        });
      })
      .catch((error) => {
        console.error("Failed to fetch procedures", error);
      });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get("page");
    const page = parseInt(pageParam) || 1;

    setCurrentPage(page);
    fetchProcedures();
  }, [currentPage, reloadTable]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const thisClicked = e.currentTarget;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosClient
          .delete(`procedure/${id}/delete`)
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Deleted",
              text: res.data.message,
            }).then(() => {
              thisClicked.innerText = "Deleting..."; // Update the button text
              fetchProcedures(); // Fetch updated data
            });
          })
          .catch(function (error) {
            if (error.response) {
              thisClicked.innerText = "Delete"; // Restore the button text
              if (error.response.status === 404) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.response.data.message,
                });
              } else if (error.response.status === 500) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: error.response.data,
                });
              }
            }
          });
      }
    });
  };

  if (loading) {
    return <ProdTable_skeleton />;
  }

  return (
    <Fragment>
      <div className="flex h-full w-full flex-col justify-between bg-white">
        <div className="grid grid-cols-6 border-b-2 border-t-2 text-center">
          <div className="p-4 font-normal tracking-wide shadow-sm">Type</div>
          <div className="p-4 font-normal tracking-wide shadow-sm">
            Procedure Name
          </div>
          <div className="p-4 font-normal tracking-wide shadow-sm">
            Creation Date
          </div>
          <div className="p-4 font-normal tracking-wide shadow-sm">
            Created by
          </div>
          <div className="p-4 font-normal tracking-wide shadow-sm">
            Edit Procedure
          </div>
          <div className="p-4 font-normal tracking-wide shadow-sm">
            Delete Procedure
          </div>
        </div>
        {loadingCreator ? (
          <div className="h-[75vh] overflow-y-auto bg-gray-100">
            {procedure.map((row, index) => {
              const createdDate = new Date(row.created_at);

              return (
                <ProcedureRow
                  key={index}
                  procedureType={row.type}
                  procedureName={row.label}
                  creationDate={createdDate.toDateString()}
                  createdBy={"Loading creator"}
                  onEdit={() => handleEdit(row.id)}
                  onDelete={() => handleDelete(row.id)}
                />
              );
            })}
          </div>
        ) : (
          <div className="h-[75vh] overflow-y-auto bg-gray-100">
            {procedure.map((row, index) => {
              const createdDate = new Date(row.created_at);

              return (
                <ProcedureRow
                  key={index}
                  procedureType={row.type}
                  procedureName={row.label}
                  creationDate={createdDate.toDateString()}
                  createdBy={users[row.user_id]}
                  onEdit={() => handleEdit(row.id)}
                  onDelete={(e) => handleDelete(e, row.id)}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="flex h-full w-full items-end justify-end">
        <div className="w-full">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
    </Fragment>
  );
}
