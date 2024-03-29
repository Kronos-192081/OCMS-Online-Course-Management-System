import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const ocms_token = localStorage.getItem('ocms_token');
  const dash = (ocms_token===null) ? {to : "/login"} : {to : "/dashboard"};

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bgval hover-nav ho_navbar">
    <div className="container">
      <span className="navbar-brand"><img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="logo" width="34" height="28" className="d-inline-block align-text-top" />
      <span className="tex big">&nbsp; OCMS </span></span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item navg">
            <Link className="nav-link active" aria-current="page" to={{pathname: '/', hash: '#'}}><span className="tex">Home</span></Link>
          </li>
          <li className="nav-item navg">
            <Link className="nav-link active" aria-current="page" to="/courses"><span className="tex">Courses</span></Link>
          </li>
          <li className="nav-item navg">
            <Link className="nav-link active" aria-current="page" to="/announcements"><span className="tex">Announcements</span></Link>
          </li>
          <li className="nav-item navg">
            <Link className="nav-link active" aria-current="page" to="/posts"><span className="tex">Posts</span></Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item navg">
            <Link className="nav-link active danger" aria-current="page" {...dash}><span className="tex">{(ocms_token===null)?"SignIn":"Dashboard"}</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
 
export default NavBar;