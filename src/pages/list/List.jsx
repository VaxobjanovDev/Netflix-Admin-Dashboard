import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { putList } from "../../context/listcontext/ApiCall";
import { ListsContext } from "../../context/listcontext/ListContext";
import "./List.css";

const List = () => {
  const location = useLocation();
  const list = location.state;
  const { _id, title, genre, type } = list;
  const [updatedList, setUpdatedList] = useState(null)
  const navigate = useNavigate()
  const { dispatch } = useContext(ListsContext);

  useEffect(()=>{
  },[dispatch])

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedList({ ...updatedList,[e.target.name]: value });
  };

  const handleClick = (e)=>{
    e.preventDefault()
    putList(_id,updatedList,dispatch)
    navigate("/lists")
  }

  return (
    <div className="product">
      <div className="product__title-container">
        <h1 className="product__title-title">List</h1>
        <Link to="/newList">
          <button className="product-button">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product-right">
          <div className="product__top-bottom-info">
            <div className="product-info-item">
              <span className="product-info-key">Id: </span>
              <span className="product-info-value">{_id}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Title: </span>
              <span className="product-info-value">{title}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Genre: </span>
              <span className="product-info-value">{genre}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Type: </span>
              <span className="product-info-value">{type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Movie Title</label>
            <input type="text" placeholder={title} name="title" onChange={handleChange}/>
            <label>Genre</label>
            <input type="text" placeholder={genre} name="genre" onChange={handleChange}/>
            <label>Type</label>
            <input type="text" placeholder={type} name="type" onChange={handleChange}/>
          </div>
          <div className="product-form-right">
            <button className="update-item-button" onClick={handleClick}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
