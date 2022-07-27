import useFetch from "./useFetch";
import Announcements from "./announcement";
import {API_URL} from "../constants";

const Announce = () => {
    const { error, isPending, data: announcements } = useFetch(API_URL + '/api/announcements');
    return ( 
        <div className=" container" id="content">
        <div className = "containing2 scr1">
        <div className = "pad2 center bold">All Announcements</div>
        <br />
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { announcements && <Announcements announcements={ announcements } /> }
        </div>
        <br />
        <br />
        </div>
     );
}
 
export default Announce;