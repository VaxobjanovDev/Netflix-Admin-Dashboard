import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMovie } from "../../context/moviecontext/ApiCall";
import { MoviesContext } from "../../context/moviecontext/MoviesContext";
import storage from "../../firebase";
import "./NewMovie.css";

const NewProduct = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [upload, setUpload] = useState(0);

  const { dispatch } = useContext(MoviesContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMovie(dispatch, movie);
    navigate("/movielist")
  };

  const uploadHandle = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage,fileName)
      const uploadTask = uploadBytesResumable(storageRef,item.file);  
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
            setMovie((prev) => {
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
    uploadHandle([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  console.log(img);

  return (
    <div className="newproduct">
      <h1 className="newproduct__title">New Movie</h1>
      <form className="newproduct__form">
        <div className="newproduct__item">
          <label>Image</label>
          <input
            type="file"
            id="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="newproduct__item">
          <label>Image Title</label>
          <input
            type="file"
            id="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className="newproduct__item">
          <label>Image SM</label>
          <input
            type="file"
            id="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="newproduct__item">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className="newproduct__item">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            id="desc"
            onChange={handleChange}
          />
        </div>
        <div className="newproduct__item">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            id="year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="newproduct__item">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            id="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="newproduct__item">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            id="duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="newproduct__item">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            id="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="newproduct__item">
          <label>Is series?</label>
          <select
            name="isSeries"
            id="isSeries"
            className="newproduct__select"
            onChange={handleChange}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="newproduct__item">
          <label>Trailer</label>
          <input
            type="file"
            id="trailer"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="newproduct__item">
          <label>Video</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {upload === 5 ? (
          <div
            className="newproduct__item create-button"
            onClick={handleSubmit}
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
      </form>
    </div>
  );
};

export default NewProduct;
