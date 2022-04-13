import { useState, useContext, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import { MoviesContext } from "../../context/moviecontext/MoviesContext";
import "./Movie.css";
import { putMovie } from "../../context/moviecontext/ApiCall";

const Movie = () => {
  const location = useLocation();
  const movie = location.state;
  const { _id, video, trailer, year, limit, title, genre, img } = movie;

  const navigate = useNavigate();
  const [updatedMovie, setUpdatedMovie] = useState(null);
  const [updatedImg, setUpdatedImg] = useState(null);
  const [updateTrailer, setUpdatedTrailer] = useState(null);
  const [updateVideo, setUpdatedVideo] = useState(null);
  const [upload, setUpload] = useState(0);

  const { dispatch } = useContext(MoviesContext);

  useEffect(() => {}, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    putMovie(_id, updatedMovie, dispatch);
    navigate("/movielist");
  };

  const uploadHandle = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const proggress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + proggress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUpdatedMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUpload((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    uploadHandle([{ file: updatedImg, label: "img" }]);
    uploadHandle([{ file: updateTrailer, label: "trailer" }]);
    uploadHandle([{ file: updateVideo, label: "video" }]);
  };

  return (
    <div className="product">
      <div className="product__title-container">
        <h1 className="product__title-title">Movie</h1>
        <Link to="/newMovie">
          <button className="product-button">Create</button>
        </Link>
      </div>
      <div className="product__top">
        <div className="product-right">
          <div className="product__top-top-info">
            <img className="product-image" src={img} alt="Product" />
            <span className="product-name">{title}</span>
          </div>
          <div className="product__top-bottom-info">
            <div className="product-info-item">
              <span className="product-info-key">Id: </span>
              <span className="product-info-value">{_id}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Genre: </span>
              <span className="product-info-value">{genre}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Year: </span>
              <span className="product-info-value">{year}</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Limit: </span>
              <span className="product-info-value">{limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              placeholder={title}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              name="year"
              placeholder={year}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              placeholder={genre}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              name="limit"
              placeholder={limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="file"
              id="trailer"
              name="trailer"
              placeholder={trailer}
              onChange={(e) => setUpdatedTrailer(e.target.files[0])}
            />
            <label>Video</label>
            <input
              type="file"
              id="video"
              name="video"
              placeholder={video}
              onChange={(e) => setUpdatedVideo(e.target.files[0])}
            />
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                className="product-upload-image"
                name="img"
                src={img}
                alt="Movie"
              />
              <label for="file" className="upload">
                <BsUpload />
              </label>
              <input
                type="file"
                id="file"
                className="upload-input"
                onChange={(e) => setUpdatedImg(e.target.files[0])}
              />
            </div>
            {upload === 1 ? (
              <div
                className="newproduct__item create-button"
                onClick={handleUpdate}
              >
                <button className="newproduct-button">Create</button>
              </div>
            ) : (
              <div
                className="newproduct__item create-button"
                onClick={handleUpload}
              >
                <button className="newproduct-button">Upload</button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Movie;
