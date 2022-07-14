import useFetch from "./useFetch";
import Post from "./post";

const Posts = () => {
    const { error, isPending, data: posts } = useFetch('http://localhost:5000/api/posts');
    return ( 
        <div className=" container" id="content">
        <div className = "containing2 scr1">
        <div className = "head center bold">All Posts</div>
        <br />
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { posts && <Post posts={ posts } /> }
        </div>
        <br />
        <br />
        </div>
     );
}
 
export default Posts;