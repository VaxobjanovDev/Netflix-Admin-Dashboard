import "./MovieList.css";

import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../context/moviecontext/MoviesContext";
import { deleteMovie, getMovie } from "../../context/moviecontext/ApiCall";

export default function Movielist() {
  const { movies, dispatch } = useContext(MoviesContext);

  useEffect(() => {
    getMovie(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Movies",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="product-params">
            <img
              className="products-image"
              src={params.row.img}
              alt="user-img"
            />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
      editable: true,
    },
    {
      field: "year",
      headerName: "Year",
      width: 120,
      editable: true,
    },
    {
      field: "limit",
      headerName: "Limit",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "isSeries",
      headerName: "Series",
      width: 120,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/movie/" + params.row._id} state={params.row}>
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
        <h1>Product List</h1>
      </div>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}
