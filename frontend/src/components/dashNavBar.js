import { Link } from "react-router-dom";

const DashNavBar = () => {
  const LogOut = () => {
    localStorage.removeItem('token');
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bgval fixed-top hover-nav">
    <div className="container">
      <span className="navbar-brand" href="#"><img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="logo" width="34" height="28" className="d-inline-block align-text-top" />
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
            <Link className="nav-link active danger" aria-current="page" to="/login" onClick={LogOut}><span className="tex">SignOut</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
 
export default DashNavBar;