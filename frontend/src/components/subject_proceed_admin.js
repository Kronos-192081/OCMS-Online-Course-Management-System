import { renderMarkup } from "react-render-markup";
import {Link} from 'react-router-dom';
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {API_URL} from "../constants";

function OnDelete(id, sub_id, subject_id, table_id)
{
    const notyf = new Notyf();
    const ocms_token = localStorage.getItem("ocms_token");
    fetch(API_URL + '/api/courses/sub/subject/table/delete/' + id + '/' + sub_id + '/' + subject_id + '/' + table_id , {
    method: 'DELETE',
    headers: { "Authorization": ocms_token }
    })
    .then((res) => {
        if(res.ok)
        {
            notyf.success("Table deleted successfully!!!");
            setTimeout(()=>{
              window.location.reload();
            }, 700);
        }
        else notyf.error("Table could not be deleted!");

    })

}


const submit = (id, sub_id, subject_id, table_id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure you want to delete this item ?',
      buttons: [
        {
          label: 'Yes',
         onClick: () => OnDelete(id, sub_id, subject_id, table_id)
        },
        {
          label: 'No'
        }
      ]
    });
  };

const Subject_proceed_admin = ({course, class_id, pro_id}) => {
    let class1, subject;
    course.sub_course.forEach(cls => {
        if (cls._id == class_id) 
        {
             class1 = cls;
        }
    })

    class1.subjects.forEach(subj => {
        if (subj._id == pro_id) 
        {
            subject = subj;
        }
    })


    return ( 
        <div className = "Individual">
            <div className = "head center bold">Subject Proceedings of {subject.Name} <br />
            <Link to ={ `/subpro_create/${course._id}/${class_id}/${pro_id}/1`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Add table</button></Link>
            </div>
            <br />
            <h6><b>Description: </b> {renderMarkup(subject.descr)}</h6>
            <h6><b>Important links: </b> {renderMarkup(subject.links)}</h6><br />
            <div className = "center"><h5>Coverage</h5></div>
            <div className = "tablestyle">
            <table className = "center5">
            <tr>
            <th>Topic</th>
            <th>Details</th>
            <th>Video link</th>
            <th>Reading material link</th>
            <th>Admin Control</th>
            <th>Admin Control</th>
            </tr>
            {subject.table.map(tab => (
                <tr>
                <td>{tab.Topic}</td>
                <td>{tab.details}</td>
                {tab.video_link && <td><a href = {tab.video_link} target ="_blank">Link</a></td>}
                {!tab.video_link && <td>No Link</td>}
                {tab.reading_link && <td><a href = {tab.reading_link} target = "_blank">Link</a></td>}
                {!tab.reading_link && <td>No Link</td>}
                <td><Link to={ `/subpro_edit/${course._id}/${class_id}/${pro_id}/${tab._id}`}><button type = "button" className = "btn btn-warning">Edit </button></Link></td>
                <td><button type = "button" className = "btn btn-danger" onClick={()=>{submit(course._id, class_id, pro_id, tab._id)}}>Delete</button></td> 
                </tr>
            ))}
             </table>
             </div>
        </div>

     );
}
 
export default Subject_proceed_admin;