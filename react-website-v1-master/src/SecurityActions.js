import axios from "axios";
import { GET_ERRORS,SET_CURRENT_USER } from "./Type";
import setJWTToken from "./setJWTToken";
import jwt_decode from "jwt-decode";



export const createNewUser = newUser => async dispatch => {
    
    try {
      await axios.post("/api/users/register", newUser);
      
      alert("Registration  Successfull!!!");
     
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };

 
  export const login =(LoginRequest,history) => async dispatch => {
    try {
      
      const res = await axios.post("/api/users/login", LoginRequest);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setJWTToken(token);
      const decoded = jwt_decode(token);
      alert("Login Successfull!!!");
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    } catch (err) {
      this.dispatch({
        type: GET_ERRORS,
       payload: err.response.data
      });
      
    }
  };
  /*
  export const Upload = (formData) => async dispatch => {
    try {
      alert("Login Successfull!!!");
      await axios.put("/api/users/addDocument",formData);
      alert("Login ");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };*/