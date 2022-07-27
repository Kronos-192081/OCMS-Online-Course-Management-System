import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {API_URL} from "../constants";

function OnDelete(id, sub_id)
{
    const notyf = new Notyf();
    const ocms_token = localStorage.getItem("ocms_token");
    fetch(API_URL + '/api/courses/sub/' + id + '/' + sub_id, {
    method: 'DELETE',
    headers: { "Authorization": ocms_token }
    })
    .then((res) => {
        if(res.ok)
        {
            notyf.success("Class deleted successfully!!!");
            setTimeout(()=>{
              window.location.reload();
            }, 700);
        }
        else notyf.error("Class could not be deleted!");

    })

}

const submit = (id, sub_id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this item ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => OnDelete(id, sub_id)
        },
        {
          label: 'No'
        }
      ]
    });
  };

const Class_indiv_admin = ( { course } ) => {
    return ( 
        <div className="row center">
            {course.sub_course.map(cls => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={course._id}>
                <h5 className="card-title">{cls.Class}</h5>
                <p className="card-text">{cls.description}</p>
                <Link to={`/subject_admin/${course._id}/${cls._id}`} className="btn btn-primary">Click here</Link>
                <br /><br />
                <div style = {{float: "right"}}><Link to={ `/class_edit/${course._id}/${cls._id}`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Edit</button></Link></div>
                <div style = {{float: "left"}}><button type="button" class="btn btn-danger" style ={{fontWeight:"bold"}} onClick={()=>{submit(course._id, cls._id)}}>Delete</button></div>
                </div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Class_indiv_admin;