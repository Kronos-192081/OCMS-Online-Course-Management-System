import Print_Announce from "./announcement_indi_print";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const Announce_indi = () => {
    const { id } = useParams();
    const { data: announcement, error, isPending } = useFetch('http://localhost:5000/api/announcements/' + id);
    return ( 
        <div className=" container" id="content">
        <div className = "containing2">
        <div className = "center bold">Announcement</div>
        <br />
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { announcement && <Print_Announce announcement={announcement} /> }
        <br />
        </div>
        </div>
     );
}
 
export default Announce_indi;