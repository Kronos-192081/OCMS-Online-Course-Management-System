import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const DashNavBar = () => {
  const LogOut = () => {
    localStorage.removeItem('token');
    const notyf = new Notyf();
    notyf.success("Logged out successfully!!!");
  }

  return (
  <nav className="navbar navbar-dark bgval1 p-3 ">
  <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
  <span className="navbar-brand"><img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="logo" width="34" height="28" className="d-inline-block align-text-top" />
      <span className="tex big">&nbsp; OCMS </span></span>
      <button className="navbar-toggler d-md-none collapsed mb-3" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
  </div>
  <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
      <div>
          <button type="button" className="btn btn-danger"><a href="https://www.google.com" style={{color: "white" ,fontWeight: "bold"}} target = "_blank">Messages</a></button> &nbsp;
          <button type="button" className="btn btn-dark"><Link to="/login" onClick={LogOut} style={{color: "white", fontWeight: "bold"}}>Sign Out</Link></button>
      </div>
  </div>
</nav>
  );
}
 
export default DashNavBar;