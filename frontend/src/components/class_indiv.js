const Class_indiv = ( { course } ) => {
    return ( 
        <div className="row center">
            {course.sub_course.map(cls => (
                <div className="col-sm-4">
                <div className="card pad1">
                <div className="card-body" key={course._id}>
                <h5 className="card-title">{cls.Class}</h5>
                <p className="card-text">{cls.description}</p>
                <a href="#" className="btn btn-primary">Click here ...</a>
                </div>
                </div>
                </div>
            ))}
        </div>
     );
}
 
export default Class_indiv;