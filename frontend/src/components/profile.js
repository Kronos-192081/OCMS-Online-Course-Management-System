import { useEffect, useState } from "react";
import Profile_Display from "./profile_display";
import { Link } from "react-router-dom";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("http://localhost:5000/api/users/current", {
        headers: { "Authorization": token }
        })
        .then(res => {
            if(res.ok)
            {
                res.json().then((msg) => {
                    fetch("http://localhost:5000/api/profile", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(msg)
                    })
                    .then(resn => {
                        if(resn.ok) resn.json().then(data => {
                            setProfile(data);
                            setIsPending(false);
                            setError(null);
                        })
                        else
                        {
                            setIsPending(false);
                            setError(null);
                        }
                    })
                })
            }
            else
            {
              throw Error('could not fetch the data for that resource');
            }
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, [])


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
        <Link className="nav-link active" to="/posts_admin">
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
        <br />
        <br />
        <div className="containing2 center-text">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { (!error) && (!isPending) && (profile!=null) && <Profile_Display profiles={ profile } />}
        { (!error) && (!isPending) && (profile==null) && <div className="center"><h1>No Profile Found</h1></div>}
        <div className = "center">
        { (!error) && (!isPending) && (profile == null) && <Link to="/edit"><button type="button" class="btn btn-danger" style ={{fontWeight:"bold"}}>Create</button></Link>}
        { (!error) && (!isPending) && (profile != null) && <Link to="/edit"><button type="button" class="btn btn-primary" style ={{fontWeight:"bold"}}>Edit</button></Link> }
        </div>
     </div>
      </div>
  </div>
</div>
    );
}

export default Profile;