import { renderMarkup } from "react-render-markup";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {API_URL} from "../constants";

function reformatDate(dateStr)
{
  let dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]; //ex out: "18/01/10"
}

function OnDelete(id)
{
    const notyf = new Notyf();
    const ocms_token = localStorage.getItem("ocms_token");
    fetch(API_URL + '/api/posts/' + id, {
    method: 'DELETE',
    headers: { "Authorization": ocms_token }
    })
    .then((res) => {
        if(res.ok)
        {
            notyf.success("Post deleted successfully!!!");
            setTimeout(()=>{
              window.location.reload();
            }, 700);
        }
        else notyf.error("Post could not be deleted!");
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

const Post_admin_print = ({ posts }) => {
    return ( 
        <Accordion>
            {posts.map(post => (
           <Accordion.Item eventKey={post._id.toString()}>
           <Accordion.Header><b>{post.title}</b></Accordion.Header>
           <Accordion.Body>
                <h6> Links: {post.link} </h6>
                <p> <b>Date of post: { reformatDate(post.date.toString().substr(0, 10)) } </b></p>
                <h6><b>Description: </b>{ post.heading }</h6>
                { <h6>{ renderMarkup(post.content) }</h6> }
                <h6> Tags: {post.tags} </h6>
                <br />
                <button type="button" class="btn btn-danger" style ={{fontWeight:"bold"}} onClick={()=>{submit(post._id)}}>Delete</button>
                <div className = "right"> <Link to={ `/post_edit/${post._id}`}><button type="button" class="btn btn-warning" style ={{fontWeight:"bold"}}>Edit</button></Link></div>
           </Accordion.Body>
           </Accordion.Item>
        ))
        }

        </Accordion>
    
     );
}
 
export default Post_admin_print;