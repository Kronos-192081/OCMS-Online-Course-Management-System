import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {API_URL} from "../constants";

function OnDelete(id, sub_id, subject_id)
{
    const notyf = new Notyf();
    const ocms_token = localStorage.getItem("ocms_token");
    fetch(API_URL + '/api/courses/sub/subject/' + id + '/' + sub_id + '/' + subject_id , {
    method: 'DELETE',
    headers: { "Authorization": ocms_token }
    })
    .then((res) => {
        if(res.ok)
        {
            notyf.success("Subject deleted successfully!!!");
            setTimeout(()=>{
              window.location.reload();
            }, 700);
        }
        else notyf.error("Subject could not be deleted!");

    })

}

const submit = (id, sub_id, subject_id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this item ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => OnDelete(id, sub_id, subject_id)
        },
        {
          label: 'No'
        }
      ]
    });
  };

const Subject_indiv_admin = ( { course, class_id }) => {
    let class1;
    course.sub_course.forEach(cls => {
        if (cls._id == class_id) 
        {
             class1 = cls;
        }
    })
 
    return ( 
        <div className="row center">
            <div className = "head center bold">All subjects under {class1.Class} <br />
            <Link to ={ `/sub_create/${course._id}/${class_id}/1`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Add Class</button></Link>
            </div>
            <br />
            {class1.subjects.map(subject => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={subject._id}>
                <h5 className="card-title">{subject.Name}</h5>
                <Link to={ `/proceed_admin/${course._id}/${class_id}/${subject._id}`} className="btn btn-primary">Click here</Link>
                <br /><br />
                <div style = {{float: "right"}}><Link to={ `/sub_edit/${course._id}/${class_id}/${subject._id}`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Edit</button></Link></div>
                <div style = {{float: "left"}}><button type="button" class="btn btn-danger" style ={{fontWeight:"bold"}} onClick={()=>{submit(course._id, class_id, subject._id)}}>Delete</button></div>
                </div>
                </div>
                </div>
            ))}
        </div> 
    );
}
 
export default Subject_indiv_admin;