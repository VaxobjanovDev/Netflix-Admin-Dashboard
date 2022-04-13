import "./Sidebar.css";
import {
  Dashboard,
  Quick,
  Notifications,
  Staff,
} from "./sidebar-menus/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Dashboard />
      <Quick />
      <Notifications />
      <Staff />
    </div>
  );
};

export default Sidebar;
