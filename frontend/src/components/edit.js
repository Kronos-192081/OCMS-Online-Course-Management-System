import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import {API_URL} from "../constants";

const Edit = () => {
    const notyf = new Notyf();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [subjects, setSubjects] = useState('');
    const [education, setEducation] = useState('');
    const [teaching, setTeaching] = useState('');
    const [contact, setContact] = useState('');
    const [profile_exists, SetProfile_exists] = useState(false);
    const [isPendingUpdate, setIsPendingUpdate] = useState(false);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const ocms_token = localStorage.getItem('ocms_token');
        fetch(API_URL + "/api/users/current", {
        headers: { "Authorization": ocms_token }
        })
        .then(res => {
            if(res.ok)
            {
                res.json().then((msg) => {
                    fetch(API_URL + "/api/profile", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(msg)
                    })
                    .then(resn => {
                        if(resn.ok) resn.json().then(data => {
                            setName(data.name);
                            setAddress(data.address);
                            setSubjects(data.subjects);
                            setTeaching(data.teaching);
                            setEducation(data.education);
                            setContact(data.contact);
                            SetProfile_exists(true);
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
              history.push('/login');
              notyf.error('Could not fetch the data for that resource');
            }
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, address, subjects, education, teaching, contact };
        const ocms_token = localStorage.getItem('ocms_token');
        setIsPendingUpdate(true);
        fetch(API_URL + '/api/profile/edit', {
        method: 'POST',
        headers: { "Content-Type": "application/json" , "Authorization": ocms_token },
        body: JSON.stringify(data)
        })
        .then((res) => {
            setIsPendingUpdate(false);
            if(res.ok)
            {
                notyf.success("Profile updated successfully!!!");
                history.push('/profile');
            }
        })
    }
    
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
      <div className="login">
          <div className="row">
            { error && <div>{ error }</div>}
            { (!error) && isPending && <div>Loading ...</div>}
            { (!error) && (!isPending) &&
            <div className="col-md-12 m-auto">
              <br />
              <h5 className="lead text-center" style ={{fontWeight: "bold"}}>{profile_exists?"Edit Profile":"Create Profile"}</h5>
              <br />
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Address</label>
                <input 
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>Subjects Offered</label>
                <input 
                    type="text"
                    value={subjects}
                    onChange={(e) => setSubjects(e.target.value)}
                />
                <label>Educational Background</label>
                <input 
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                />
                <label>Teaching Experience</label>
                <input 
                    type="text"
                    value={teaching}
                    onChange={(e) => setTeaching(e.target.value)}
                />
                <label>Contact Details</label>
                <input 
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <br />
                { !isPendingUpdate && <button>{profile_exists?"Edit Profile":"Create Profile"}</button> }
                { isPendingUpdate && <button disabled>Updating ...</button> }
            </form>
            </div>
            }
          </div>
        </div>
      </div>
  </div>
</div> 
  );
}
 
export default Edit;