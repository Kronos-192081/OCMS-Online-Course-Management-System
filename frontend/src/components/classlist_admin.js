import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import Class_indiv_admin from "./class_indiv_admin";
import useFetch from "./useFetch"; 
import {API_URL} from "../constants";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';


const Classlist_admin = () => {
    const [name, setName] = useState('');
    const history = useHistory();
    const notyf = new Notyf();

    useEffect(() => {
        const ocms_token = localStorage.getItem('ocms_token');
        fetch(API_URL + "/api/users/current", {
            headers: { "Authorization": ocms_token }
            })
            .then(res => {
                if(res.ok)
                {
                    res.json().then((msg) => {
                    setName(msg.name);
                    });
                }
                else 
                {
                  history.push('/login');
                  notyf.error("Unauthorised");
                }
        })
    }, [])
    const { id } = useParams();
    const { error: error2, isPending: isPending2, data: course } = useFetch(API_URL + '/api/courses/' + id);

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
        <Link className="nav-link active" to="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span className="ml-2">Your Profile</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/post_admin">
          <img src="https://www.svgrepo.com/show/325504/playlist-play.svg" alt="logo" width="24" height="24" className="d-inline-block align-text-top" />
          <span className="ml-2">Manage Posts</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/announcements_admin">
          <img src="https://www.svgrepo.com/show/234457/megaphone-advertising.svg" alt="logo" width="24" height="24" className="d-inline-block align-text-top" />
          <span className="ml-2">Manage Announcements</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/courses_admin">
          <img src="https://www.svgrepo.com/show/60373/books.svg" alt="logo" width="24" height="24" className="d-inline-block align-text-top" />
          <span className="ml-2">Manage Courses</span>
        </Link>
      </li>
      <li className="nav-item navg1">
        <Link className="nav-link active" to="/documentation">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <span className="ml-2">Documentation</span>
        </Link>
      </li>
    </ul>
</div>
      </nav>
      <div className="col-md-9 ml-sm-auto col-lg-10 custom-body">
          { error2 && <div>{ error2 }</div> }
          { isPending2 && <div>Loading...</div> }
          { course && <div className = "head center bold">All classes under {course.course_name}<br /><Link to ={ `/class_edit/${course._id}/1`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Add Class</button></Link></div>}
          <br />
          { error2 && <div>{ error2 }</div> }
          { isPending2 && <div>Loading...</div> }
          { course && <Class_indiv_admin course = {course} />}
          <br />
      </div>
  </div>
</div>
  );
}

export default Classlist_admin;