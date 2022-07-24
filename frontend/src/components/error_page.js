import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className=" container" id="content">
        <div className = "containing2 center">
        <div className = "head center bold">Error 404: Page not found</div>
        <br />
        <Link to="/" className="btn btn-success">Home</Link>
        </div>
        <br />
        <br />
        </div>
     );
}
 
export default Error;