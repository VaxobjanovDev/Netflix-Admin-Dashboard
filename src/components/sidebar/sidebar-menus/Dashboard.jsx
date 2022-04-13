import { AiFillHome, AiOutlineMail, AiOutlinePlayCircle } from "react-icons/ai";
import { BiTrendingUp, BiUser } from "react-icons/bi";
import {
  MdTimeline,
  MdOutlineDynamicFeed,
  MdReportGmailerrorred,
} from "react-icons/md";
import { BsDiagram2, BsBag, BsListStars } from "react-icons/bs";
import { TiMessage } from "react-icons/ti";
import "./Main.css";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="sidebar__menu">
      <h3 className="sidebar__title">Dashboard</h3>
      <ul className="sidebar__list">
        <Link className="link" to="/">
          <li className="sidebar__list-item active">
            <AiFillHome className="sidebar-icon" />
            Home
          </li>
        </Link>
        <li className="sidebar__list-item">
          <BiTrendingUp className="sidebar-icon" />
          Anylictics
        </li>
        <li className="sidebar__list-item">
          <MdTimeline className="sidebar-icon" />
          Trending
        </li>
      </ul>
    </div>
  );
};

export const Quick = () => {
  return (
    <div className="sidebar__menu">
      <h3 className="sidebar__title">Notifications</h3>
      <ul className="sidebar__list">
        <Link className="link" to="/userlist">
          <li className="sidebar__list-item">
            <BiUser className="sidebar-icon" />
            Users
          </li>
        </Link>
        <Link className="link" to="/movielist">
          <li className="sidebar__list-item">
            <AiOutlinePlayCircle className="sidebar-icon" />
            Movies
          </li>
        </Link>
        <Link className="link" to="/lists">
        <li className="sidebar__list-item">
          <BsListStars className="sidebar-icon" />
          Lists
        </li>
        </Link>
        <li className="sidebar__list-item">
          <BsDiagram2 className="sidebar-icon" />
          Reports
        </li>
      </ul>
    </div>
  );
};

export const Notifications = () => {
  return (
    <div className="sidebar__menu">
      <h3 className="sidebar__title">Quick Menu</h3>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <AiOutlineMail className="sidebar-icon" />
          Mail
        </li>
        <li className="sidebar__list-item">
          <MdOutlineDynamicFeed className="sidebar-icon" />
          Feedback
        </li>
        <li className="sidebar__list-item">
          <TiMessage className="sidebar-icon" />
          Messages
        </li>
      </ul>
    </div>
  );
};

export const Staff = () => {
  return (
    <div className="sidebar__menu">
      <h3 className="sidebar__title">Staff</h3>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <BsBag className="sidebar-icon" />
          Manage
        </li>
        <li className="sidebar__list-item">
          <BiTrendingUp className="sidebar-icon" />
          Anylictics
        </li>
        <li className="sidebar__list-item">
          <MdReportGmailerrorred className="sidebar-icon" />
          Reports
        </li>
      </ul>
    </div>
  );
};
