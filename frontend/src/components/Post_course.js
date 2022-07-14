import { Link } from "react-router-dom";

const Post_course = ( { posts, course }) => {
    posts.forEach(post => {
        if(post.tags == undefined)
        {
            post.tags = "";
        }
    })
    let postss = posts.filter(post => post.tags.includes(course.course_name));
    return ( 
        <div className="list-group">
        {postss.map(post => (
          <Link to={ `/posts/${post._id}`} className="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
          <div className="d-flex w-100 justify-content-between" key={post._id}>
            <h5 className="mb-1 cobalt"> { post.title }</h5>
          </div>
          <h6 className="mb-1"> {post.heading }</h6>
          <p className="mb-1"> Click to see more ...</p>
          </Link>
        ))}
        </div>
     );
}
 
export default Post_course;