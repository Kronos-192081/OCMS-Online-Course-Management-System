import { renderMarkup } from "react-render-markup";
import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {API_URL} from "../constants";

function OnDelete(id)
{
    const notyf = new Notyf();
    const ocms_token = localStorage.getItem("ocms_token");
    fetch(API_URL + '/api/courses/' + id, {
    method: 'DELETE',
    headers: { "Authorization": ocms_token }
    })
    .then((res) => {
        if(res.ok)
        {
            notyf.success("Course deleted successfully!!!");
            setTimeout(()=>{
              window.location.reload();
            }, 700);
        }
        else notyf.error("Course could not be deleted!");

    })

}

const submit = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this item ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => OnDelete(id)
        },
        {
          label: 'No'
        }
      ]
    });
  };
  

const Course_admin = ( { courses } ) => {
    return ( 
        <div className="row center">
            {courses.map(course => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={course._id}>
                <h5 className="card-title">{course.course_name}</h5>
                <p className="card-text">{course.note}</p>
                <Link to={ `/classlist_admin/${course._id}`} className="btn btn-primary">Click here</Link><br /><br />
                <div style = {{float: "right"}}><Link to={ `/course_edit/${course._id}`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Edit</button></Link></div>
                <div style = {{float: "left"}}><button type="button" class="btn btn-danger" style ={{fontWeight:"bold"}} onClick={()=>{submit(course._id)}}>Delete</button></div>
                </div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Course_admin;