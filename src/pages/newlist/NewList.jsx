import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postList } from "../../context/listcontext/ApiCall";
import { ListsContext } from "../../context/listcontext/ListContext";
import { getMovie } from "../../context/moviecontext/ApiCall";
import { MoviesContext } from "../../context/moviecontext/MoviesContext";
import "./NewList.css";

const NewList = () => {
  const [list, setList] = useState(null);
  const navigate = useNavigate()

  const { dispatch } = useContext(ListsContext);
  const { movies, dispatch:dispatchMovie } = useContext(MoviesContext);

  useEffect(() => {
    getMovie(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postList(list, dispatch); 
    navigate('/lists')
  };

  return (
    <div className="newproduct">
      <h1 className="newproduct__title">New List</h1>
      <form className="newproduct__form">
        <div className="form-left">
          <div className="newlist__item">
            <label>Title</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="newlist__item">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Genre"
              id="genre"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="newlist__item">
            <label>Type</label>
            <select className="type-select" name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="form-right">
          <div className="newlist__item">
            <label>Content</label>
            <select
              className="content-select"
              name="content"
              multiple
              onChange={handleSelect}
            >
              {movies.map((movie) => (
                <option value={movie._id} key={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
          <div
            className="newlist__item create-button"
            onClick={handleSubmit}
          >
            <button className="newproduct-button">Create</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewList;
