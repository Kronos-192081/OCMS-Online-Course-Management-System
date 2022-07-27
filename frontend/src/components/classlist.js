import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import Class_indiv from "./class_indiv";
import Course from "./course";
import Post from "./post";
import Post_course from "./Post_course";
import {API_URL} from "../constants";

const Class = () => {
   const { id } = useParams();
   console.log(id);
    const { error: error2, isPending: isPending2, data: course } = useFetch(API_URL + '/api/courses/' + id);
    const { error, isPending, data: posts } = useFetch(API_URL + '/api/posts');
    return ( 
        <div className=" container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 scr2">
                { error2 && <div>{ error2 }</div> }
                { isPending2 && <div>Loading...</div> }
                { course && <div className = "head center bold">All classes under {course.course_name} </div>}
                <br />
                { error2 && <div>{ error2 }</div> }
                { isPending2 && <div>Loading...</div> }
                { course && <Class_indiv course = {course} />}
                <br />
                <br />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 scr2">
                { error2 && <div>{ error2 }</div> }
                { isPending2 && <div>Loading...</div> }
                { course && <div className = "head center bold">All Posts under {course.course_name} </div>}
                <br />
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { posts && <Post_course posts= { posts } course = {course} />}
                </div>
            </div>
        </div>
     );
}
 
export default Class;