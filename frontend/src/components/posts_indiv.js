import Print_Post from "./posts_indiv_print";
import useFetch from "./useFetch";

const Post_indi = () => {
    const { error, isPending, data: posts } = useFetch('http://localhost:5000/api/posts');
    return ( 
        <div className=" container" id="content">
        <div className = "containing1">
        <div className = "center bold">Post</div>
        <br />
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { posts && <Print_Post announcement={posts[2]} /> }
        <br />
        </div>
        </div>
     );
}
 
export default Post_indi;