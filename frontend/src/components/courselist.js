import useFetch from "./useFetch";
import Course from "./course";
import {API_URL} from "../constants";

const Courses = () => {
    const { error: error2, isPending: isPending2, data: courses } = useFetch(API_URL + '/api/courses');
    return ( 
    <div className=" container">
        <div className = "containing3">
        <div className = "head center bold">All Courses</div>
        <br />
        { error2 && <div>{ error2 }</div> }
        { isPending2 && <div>Loading...</div> }
        { courses && <Course courses={courses} /> }
        </div>
        <br />
        <br />
    </div> 
    );
}
 
export default Courses;