import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Topbar,
  Sidebar,
  Home,
  User,
  NewUser,
  Userlist,
  Login,
  MovieList,
  Movie,
  NewMovie,
  Lists,
  NewList,
  List,
} from "./pages";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/authcontext/Authcontext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        {user ? (
           <>
           <Topbar />
           <div className="container">
             <Sidebar />
             <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/user/:id" element={<User />} />
               <Route path="/newuser" element={<NewUser />} />
               <Route path="/userlist" element={<Userlist />} />
               <Route path="/movielist" element={<MovieList />} />
               <Route path="/movie/:id" element={<Movie />} />
               <Route path="/newMovie" element={<NewMovie />} />
               <Route path="/lists" element={<Lists />} />
               <Route path="/list/:id" element={<List />} />
               <Route path="/newList" element={<NewList />} />
             </Routes>
           </div>
         </>
        ) : (
         <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
