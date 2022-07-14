import useFetch from "./useFetch";
import Announcements from "./announcement";

const Announce = () => {
    const { error, isPending, data: announcements } = useFetch('http://localhost:5000/api/announcements');
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