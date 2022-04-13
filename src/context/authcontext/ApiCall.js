import axios from "axios"
import { loginFailure, loginStart, loginSucces } from "./AuthActions"

export const loginAPI = async(user, dispatch)=>{
  dispatch(loginStart())
	try{
		const res = await axios.post("auth/login", user)
		res.data.admin && dispatch(loginSucces(res.data))
	}catch(e){
		dispatch(loginFailure())
	}
}