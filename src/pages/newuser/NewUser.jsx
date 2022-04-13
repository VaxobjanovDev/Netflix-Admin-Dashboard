import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postUser } from "../../context/usercontext/ApiCall";
import { UsersContext } from "../../context/usercontext/UsersContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../firebase";
import "./NewUser.css";

const NewUser = () => {
  const [newUser, setNewUser] = useState(null);
  const [profileImg, setProfileImage] = useState(null);
  const [upload, setUpload] = useState(0);

  const { dispatch } = useContext(UsersContext);

  const navigate = useNavigate();
  useEffect(() => {}, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = e.target.value;
    setNewUser({ ...newUser, [e.target.name]: value });
  };

  const handleCreate = (e) => {
    e.preventDefault();
    postUser(dispatch, newUser);
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
            setNewUser((prev) => {
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
    uploadHandle([{ file: profileImg, label: "profileImg" }]);
  };

  return (
    <div className="newuser">
      <h1 className="newuser__title">New User</h1>
      <form className="newuser__form">
        <div className="newuser__item">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="newuser__item">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newuser__item">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="newuser__item">
          <label for="profileImg">Profile Image</label>
          <input
            type="file"
            name="profileImg"
            id="profileImg"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>
        <div className="newuser__item">
          <label>Admin</label>
          <select
            name="admin"
            id="admin"
            className="newuser__select"
            onChange={handleSelect}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="newuser__item">
          {upload === 1 ? (
            <div
              className="newproduct__item create-button"
              onClick={handleCreate}
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
  );
};

export default NewUser;
