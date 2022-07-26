import { renderMarkup } from "react-render-markup";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function reformatDate(dateStr)
{
  let dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]; //ex out: "18/01/10"
}

function OnDelete(id)
{
    const notyf = new Notyf();
    const ocms_token = localStorage.getItem("ocms_token");
    fetch('http://localhost:5000/api/announcements/' + id, {
    method: 'DELETE',
    headers: { "Authorization": ocms_token }
    })
    .then((res) => {
        if(res.ok)
        {
            notyf.success("Announcement deleted successfully!!!");
            setTimeout(()=>{
              window.location.reload();
            }, 700);
        }
        else notyf.error("Announcement could not be deleted!");

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

const Announcements_admin_print = ({ announcements }) => {
    // console.log(announcements);
    return ( 
        <Accordion>
            {announcements.map(announcement => (
           <Accordion.Item eventKey={announcement._id.toString()}>
           <Accordion.Header><b>{announcement.Heading}</b></Accordion.Header>
           <Accordion.Body>
                <h6> Link: {announcement.link} </h6>
                <p> <b>Date of announcement: { reformatDate(announcement.date.toString().substr(0, 10)) } </b></p>
                <h6><b>Subject(s): </b>{ announcement.heading }</h6>
                <h6><b>Time Duration: </b> {announcement.Time_Duration}</h6>
                { <h6>{ renderMarkup(announcement.content) }</h6> }
                <br />
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" style ={{fontWeight:"bold"}} onClick={()=>{submit(announcement._id)}}>Delete</button>
                <div className = "right"> <Link to={ `/announcement_edit/${announcement._id}`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Edit</button></Link></div>
           </Accordion.Body>
           </Accordion.Item>
        ))
        }

        </Accordion>
    
     );
}
 
export default Announcements_admin_print;