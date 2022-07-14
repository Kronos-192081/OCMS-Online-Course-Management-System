import { renderMarkup } from "react-render-markup";
import { Link } from "react-router-dom";

const Course = ( { courses } ) => {
    return ( 
        <div className="row center">
            {courses.map(course => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={course._id}>
                <h5 className="card-title">{course.course_name}</h5>
                <p className="card-text">{course.note}</p>
                <Link to={ `/courses/${course._id}`} className="btn btn-primary">Click here ...</Link>
                </div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Course;