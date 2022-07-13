
const Announcements = ({ announcements }) => {
    return ( 
    <div className="list-group">
      {announcements.map(announcement => (
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
        <div className="d-flex w-100 justify-content-between" key={announcement._id}>
          <h5 className="mb-1 cobalt"> { announcement.Heading }</h5>
        </div>
        <p className="mb-1"> Click to see more ...</p>
        </a>
      ))}
      </div>
    );
}
 
export default Announcements;
