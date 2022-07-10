import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top hover-nav">
    <div className="container">
      <a className="navbar-brand" href="#"><img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="34" height="28" className="d-inline-block align-text-top" />
      &nbsp; Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#content">Courses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#content">Announcements</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#content">Posts</a>
          </li>
        </ul>
        <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active danger" aria-current="page" href="https://www.google.com" target="_blank">SignIn</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
 
export default NavBar;