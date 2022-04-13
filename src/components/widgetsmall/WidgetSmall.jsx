import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import "./WidgetSmall.css";

const WidgetSmall = () => {
  const [newUserData, setNewUserData] = useState([]);

  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accesToken,
          },
        });
        setNewUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUser();
  }, []);

  return (
    <div className="widget__small">
      <span className="widget__small-title">New Join Members</span>
      <ul className="widget__small-list">
        {newUserData.map((user)=>(
          <li key={user._id} className="widget__small-list-item">
          <img
            src={user.profileImg || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
            alt="Rasm"
            className="item-img"
          />
          <div className="widget__small-user">
            <span className="username">{user.username}</span>
          </div>
          <button className="widget__small-button">
            <MdOutlineVisibility className="button-icon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
