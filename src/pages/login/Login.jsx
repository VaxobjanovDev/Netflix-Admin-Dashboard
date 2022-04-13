import { useContext, useState } from "react";
import { loginAPI } from "../../context/authcontext/ApiCall";
import { AuthContext } from "../../context/authcontext/Authcontext";
import "./Login.css";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {isFetching, dispatch} = useContext(AuthContext)

  const handleClick = (e)=>{
    e.preventDefault()
    loginAPI({email,password},dispatch)
  }

  return (
    <div className="login">
      <form className="login__form">
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button className="login__button" onClick={handleClick} disabled={isFetching}>Login</button>
      </form>
    </div>
  );
};

export default Login;
