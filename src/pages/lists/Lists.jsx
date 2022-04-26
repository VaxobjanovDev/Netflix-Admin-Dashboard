import "./Lists.css";

import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteList, getLists } from "../../context/listcontext/ApiCall";
import { ListsContext } from "../../context/listcontext/ListContext";

export default function Lists() {
  const { lists, dispatch } = useContext(ListsContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteList(id,dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "Name", width: 250 },

    {
      field: "type",
      headerName: "Type",
      width: 150,
      editable: true,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/list/" + params.row._id} state={params.row}>
              <button className="product-edit">Edit</button>
            </Link>
            <AiOutlineDelete
              onClick={() => handleDelete(params.row._id)}
              className="product-delete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productlist" style={{ height: 600, width: "100%" }}>
      <div className="productlist__title">
        <h1>Lists</h1>
        <Link to="/newlist">
          <button className="product-button">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
}
