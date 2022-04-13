import "./Userlist.css";
import { AiOutlineDelete } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../context/usercontext/UsersContext";
import { useEffect } from "react";
import { deleteUser, getUsers } from "../../context/usercontext/ApiCall";

export default function Userlist() {

  const {users, dispatch} = useContext(UsersContext)


  useEffect(()=>{
    getUsers(dispatch)
  },[dispatch])

  const handleDelete = (id)=>{
    deleteUser(id,dispatch)
  }

  const columns = [

    { field: "_id", headerName: "ID", width: 150 },
    {
      field: "username",
      headerName: "Username",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userlist-user">
            <img className="user-image" src={params.row.profileImg} alt="user-img" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "password",
      headerName: "Password",
      width: 150,
      editable: true,
    },
    {
      field: "admin",
      headerName: "Admin",
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
            <Link to={'/user/' + params.row._id} state={params.row}>
            <button className="user-edit">Edit</button>
            </Link>
            <AiOutlineDelete onClick={()=>handleDelete(params.row._id)} className="user-delete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list" style={{ height: 600, width: "100%" }}>
      <div className="userlist__title">
        <h1>User List</h1>
      </div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r=>r._id}
      />
    </div>
  );
}
