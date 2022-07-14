 import { Link } from "react-router-dom";
const Announcements = ({ announcements }) => {
    return ( 
    <div className="list-group">
      {announcements.map(announcement => (
        <Link to={ `/announcements/${announcement._id}`} className="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
        <div className="d-flex w-100 justify-content-between" key={announcement._id}>
          <h5 className="mb-1 cobalt"> { announcement.Heading }</h5>
        </div>
        <p className="mb-1"> Click to see more ...</p>
        </Link>
      ))}
      </div>
    );
}
 
export default Announcements;
