import { renderMarkup } from "react-render-markup";

const Course = ( { courses } ) => {
    return ( 
        <div className="row center">
            {courses.map(course => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={course._id}>
                <h5 className="card-title">{course.course_name}</h5>
                <p className="card-text">{course.note}</p>
                <a href="#" className="btn btn-primary">Click here ...</a>
                </div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Course;