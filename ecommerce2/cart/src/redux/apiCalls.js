import axios from "axios";
import { loginFailure,loginStart,loginSuccess } from "./userRedux";
//import { publicRequest } from "../requestMethod";
export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    console.log(user.username);
    try{
        const res= await axios.post("http://localhost:5000/api/auth/login",user);
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure());
    }
}