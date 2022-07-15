import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import Subject_indiv from "./Subjects_indiv";

const Subjects = () => {
    const { id, class_id } = useParams();
    const { error: error2, isPending: isPending2, data: course } = useFetch('http://localhost:5000/api/courses/' + id);
    return ( 
        <div className=" container">
        <div className = "containing3">
        <br />
        { error2 && <div>{ error2 }</div> }
        { isPending2 && <div>Loading...</div> }
        { course && <Subject_indiv course={course} class_id = { class_id }/> }
        </div>
        <br />
        <br />
    </div> 
     );
}
 
export default Subjects;