import { useEffect } from "react";
import { useContext, useState } from "react";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BsUpload } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { putUser } from "../../context/usercontext/ApiCall";
import { UsersContext } from "../../context/usercontext/UsersContext";
import storage from "../../firebase";

import "./User.css";

const User = () => {
  const location = useLocation();
  const user = location.state;
  const { _id, username, profileImg, email, admin } = user;
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState(null);
  const [img, setImg] = useState(null);
  const [upload, setUpload] = useState(0);

  const { dispatch } = useContext(UsersContext);

  useEffect(() => {}, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    putUser(_id, updatedUser, dispatch);
    navigate("/userlist");
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
            setUpdatedUser((prev) => {
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
    uploadHandle([{ file: img, label: "profileImg" }]);
  };

  return (
    <div className="user">
      <div className="user__title-container">
        <h1 className="user__title-title">Edit User</h1>
        <Link to="/newuser">
          <button className="user-button">Create</button>
        </Link>
      </div>
      <div className="user__container">
        <div className="user__show">
          <div className="user__show-top">
            <img src={profileImg} alt="User" className="user-show-image" />
            <div className="user__show-title">
              <span className="user-username">{username}</span>
            </div>
          </div>
          <div className="user__show-bottom">
            <span className="user__show-bottom-title">Account Details</span>
            <div className="user__show-info">
              <AiOutlineUser className="user-show-icon" />
              <span className="user__show-info-title">{username}</span>
            </div>
            <span className="user__show-bottom-title">
              Contact Informations
            </span>
            <div className="user__show-info">
              <AiOutlineMail className="user-show-icon" />
              <span className="user__show-info-title">{email}</span>
            </div>
          </div>
        </div>
        <div className="user__update">
          <span className="user__update-title">Edit</span>
          <form className="user__update-form">
            <div className="user__update-left">
              <div className="user__update-item">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={username}
                  onChange={handleChange}
                  className="user__update-input"
                />
              </div>
              <div className="user__update-item">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder={email}
                  name="email"
                  onChange={handleChange}
                  className="user__update-input"
                />
              </div>
              <div className="user__update-item">
                <label htmlFor="admin">Admin</label>
                <select name="admin" onChange={handleSelect}>
                  {admin ? (
                    <option>Yes Default</option>
                  ) : (
                    <option>No Default</option>
                  )}
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
            <div className="user__update-right">
              <div className="user__update-upload-image">
                <img
                  src={profileImg}
                  alt="User-change"
                  className="user__update-image"
                />
                <label id="img" for="file" className="upload">
                  <BsUpload />
                </label>
                <input
                  type="file"
                  name="img"
                  id="file"
                  className="upload-input"
                  onChange={(e) => setImg(e.target.files[0])}
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
    </div>
  );
};

export default User;
