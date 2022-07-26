import { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';

const SubEdit = () => {
    const notyf = new Notyf();
    const [Name, setName] = useState('');
    const [descr, setDescr] = useState('');
    const [links, setLinks] = useState('');
    const [isPendingUpdate, setIsPendingUpdate] = useState(false);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const history = useHistory();
    const { id, class_id, pro_id } = useParams();

    useEffect(() => {
        const ocms_token = localStorage.getItem('ocms_token');
        fetch("http://localhost:5000/api/users/current", {
        headers: { "Authorization": ocms_token }
        })
        .then(res => {
            if(res.ok)
            {
                setIsPending(false);
                setError(null);
            }
            else
            {
              history.push('/login');
              notyf.error("Unauthorised");
            }
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { Name, descr, links };
        const ocms_token = localStorage.getItem('ocms_token');
        setIsPendingUpdate(true);
        if(pro_id !== "1")
        {
            fetch('http://localhost:5000/api/courses/sub/subject/update/' + id + '/' + class_id + '/' + pro_id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" , "Authorization": ocms_token },
            body: JSON.stringify(data)
            })
            .then((res) => {
                setIsPendingUpdate(false);
                if(res.ok)
                {
                    notyf.success("Subject updated successfully!!!");
                    history.push('/subject_admin/' + id + '/' + class_id);
                }
            })
        }
        else
        {
            fetch('http://localhost:5000/api/courses/sub/subject/' + id + '/' + class_id, {
            method: 'POST',
            headers: { "Content-Type": "application/json" , "Authorization": ocms_token },
            body: JSON.stringify(data)
            })
            .then((res) => {
                setIsPendingUpdate(false);
                if(res.ok)
                {
                    notyf.success("Subject created successfully!!!");
                    history.push('/subject_admin/' + id + '/' + class_id);
                }
            })
        }
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
              <h5 className="lead text-center" style ={{fontWeight: "bold"}}>{(pro_id==="1")?"Create Subject":"Edit Subject"}</h5>
              <br />
              <form onSubmit={handleSubmit}>
                <label>Subject Name</label>
                <input 
                    type="text"
                    required 
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Description</label>
                <input 
                    type="text"
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)}
                />
                <label>Links</label>
                <input 
                    type="text"
                    value={links}
                    onChange={(e) => setLinks(e.target.value)}
                />
                <br />
                { !isPendingUpdate && <button>{(pro_id==="1")?"Create Subject":"Edit Subject"}</button> }
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
 
export default SubEdit;