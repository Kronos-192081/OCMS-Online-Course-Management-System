import Print_Announce from "./announcement_indi_print";
import useFetch from "./useFetch";

const Announce_indi = () => {
    const { error, isPending, data: announcements } = useFetch('http://localhost:5000/api/announcements');
    return ( 
        <div className=" container" id="content">
        <div className = "containing1">
        <div className = "center bold">Announcement</div>
        <br />
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { announcements && <Print_Announce announcement={announcements[2]} /> }
        <br />
        </div>
        </div>
     );
}
 
export default Announce_indi;