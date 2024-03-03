import React from 'react';
import './Loader.css'; 
import Logo  from "../../assets/logo.svg";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <p> Loading...</p>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Loader;
