import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

const DashBoard = () => {
    const [name, setName] = useState('');
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("http://localhost:5000/api/users/current", {
            headers: { "Authorization": token }
            })
            .then(res => {
                if(res.ok)
                {
                    res.json().then((msg) => {
                    setName(msg.name);
                    });
                }
                else history.push('/login');
        })
    })

    return (
        
<div className="container-fluid">
  <div className="row">
      <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bgval2 hover-nav1 sidebar collapse ">
      <div className="pt-md-5">
  <ul className="nav flex-column">
    <br /> <br />
      <li className="nav-item navg1">
        <Link className="nav-link active" aria-current="page" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className="ml-2">Dashboard</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <a className="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span className="ml-2">Your Profile</span>
        </a>
      </li>
      <li className="nav-item navg1">
        <a className="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
          <span className="ml-2">Manage Posts</span>
        </a>
      </li>
      <li className="nav-item navg1">
        <a className="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
          <span className="ml-2">Manage Announcements</span>
        </a>
      </li>
      <li className="nav-item navg1">
        <a className="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
          <span className="ml-2">Manage Courses</span>
        </a>
      </li>
      <li className="nav-item navg1">
        <a className="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <span className="ml-2">Documentation</span>
        </a>
      </li>
    </ul>
</div>
      </nav>
      <div className="col-md-9 ml-sm-auto col-lg-10 ">
          <h1 className=" container center imp-pad" > Welcome {name} !!! </h1>
      </div>
  </div>
</div>
  );
}

export default DashBoard;