import { type } from "os";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss';


type NavbarProps={
    styles?:React.CSSProperties;
}

const Navbar = (Props:NavbarProps) => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="/">React User</Link>
       <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
           <li className="nav-item">
      <Link className="nav-link" to="/"> Home</Link>
           </li>
           <li className="nav-item">
     <Link className="nav-link"  to="/about">About</Link>
           </li>
        </ul>
     </div>

    <Link className="btn btn-outline-light" to="/addUsers">Add</Link>
    </div>
    </div>
  );
};

export default Navbar;