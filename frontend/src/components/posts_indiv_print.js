import { renderMarkup } from "react-render-markup";

function reformatDate(dateStr)
{
  let dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]; //ex out: "18/01/10"
}

const Print_Post = ( {post} ) => {
    let announce_date = reformatDate(post.date.toString().substr(0, 10));
    return ( 
        <div className = "Individual">
            <h5 className = "center"> {post.Heading} </h5>
            <br></br>
            <p> <b>Date of post: { announce_date } </b></p>
            <h6> <b>Links: </b> { post.link }</h6>
            <h6> <b>Subject(s): </b> { post.Subject }</h6>
            <h6> <b> { post.Time_Duration && ( "Time Duration : ") && post.subject } </b></h6>
            <h6> { renderMarkup(post.content) }</h6>
        </div>
     );
}
 
export default Print_Post;