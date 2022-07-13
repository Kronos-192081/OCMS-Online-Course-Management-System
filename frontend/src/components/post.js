const Post = ({ posts }) => {
    return ( 
        <div className="list-group">
        {posts.map(post => (
          <a href="#" className="list-group-item list-group-item-action flex-column align-items-start list-com-announcements">
          <div className="d-flex w-100 justify-content-between" key={post._id}>
            <h5 className="mb-1 cobalt"> { post.title }</h5>
          </div>
          <h6 className="mb-1"> {post.heading }</h6>
          <p className="mb-1"> Click to see more ...</p>
          </a>
        ))}
        </div>
     );
}
 
export default Post;