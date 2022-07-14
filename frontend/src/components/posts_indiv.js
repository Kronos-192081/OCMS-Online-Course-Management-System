import Print_Post from "./posts_indiv_print";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const Post_indi = () => {
    const { id } = useParams();
    const { error, isPending, data: post } = useFetch('http://localhost:5000/api/posts/' + id);
    return ( 
        <div className=" container" id="content">
        <div className = "containing2">
        <div className = "center bold">Post</div>
        <br />
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { post && <Print_Post post={post} /> }
        <br />
        </div>
        </div>
     );
}
 
export default Post_indi;