import React from 'react';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Register from './Register';
import Login from './Login';
import { Provider } from "react-redux";
import Store from "./Store";
import HomePage from './HomePage';
import jwt_decode from "jwt-decode";
import setJWTToken from "./setJWTToken";
import { SET_CURRENT_USER } from "./Type";
import UploadFiles from './UploadFiles';
import Logout from './Logout';


const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  Store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    //handle logout
    //window.location.href = "/";
  }
}
function App() {
  return (
    <Provider store={Store}>
      <Router>
       
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="upload" element={<UploadFiles />} />
          <Route path="logout" element={<Logout />} />
          </Routes>
      </Router>
      
      </Provider>
   
  );
}

export default App;
