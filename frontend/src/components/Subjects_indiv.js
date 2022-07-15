import { Link } from "react-router-dom";

const Subject_indiv = ( { course, class_id }) => {
    let class1;
    course.sub_course.forEach(cls => {
        if (cls._id == class_id) 
        {
             class1 = cls;
        }
    })
    return ( 
        <div className="row center">
            <div className = "head center bold">All subjects under {class1.Class}</div>
            <br />
            {class1.subjects.map(subject => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={subject._id}>
                <h5 className="card-title">{subject.Name}</h5>
                <Link to={ `/courses/${course._id}/${class_id}/${subject._id}`} className="btn btn-primary">Click here ...</Link>
                </div>
                </div>
                </div>
            ))}
        </div> 
    );
}
 
export default Subject_indiv;