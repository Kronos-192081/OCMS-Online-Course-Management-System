import { renderMarkup } from "react-render-markup";
import { useParams } from "react-router-dom";

function reformatDate(dateStr)
{
  let dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]; //ex out: "18/01/10"
}

const Print_Announce = ( {announcement} ) => {
    let announce_date = reformatDate(announcement.date.toString().substr(0, 10));
    return ( 
        <div className = "Individual">
            <h5 className = "center"> {announcement.Heading} </h5>
            <br></br>
            <p> <b>Date of announcement: { announce_date } </b></p>
            <h6> <b>Links: </b> { announcement.link }</h6>
            <h6> <b>Subject(s): </b> { announcement.Subject }</h6>
            <h6> <b> { announcement.Time_Duration && ( "Time Duration : ") && announcement.subject } </b></h6>
            <h6> { renderMarkup(announcement.content) }</h6>
        </div>
     );
}
 
export default Print_Announce;