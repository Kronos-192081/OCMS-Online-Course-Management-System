import { renderMarkup } from "react-render-markup";

function reformatDate(dateStr)
{
  let dArr = dateStr.split("-");  // ex input "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]; //ex out: "18/01/10"
}

const Print_Post = ({ post }) => {
    let post_date = reformatDate(post.date.toString().substr(0, 10));
    return ( 
        <div className = "Individual">
            <h5 className = "center">{ post.title }</h5>
            <br />
            { post.link &&
            <div className = "containing1">
            <div className="container1">
              <iframe className="responsive-iframe" width="560" height="315" src={ post.link } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <br />
            <a href={ post.link } target="_blank"><h6>Link</h6></a>
            </div> }
            <br />
            <p> <b>Date of post: { post_date } </b></p>
            <h6><b>Description: </b>{ post.heading }</h6>
            { <h6>{ renderMarkup(post.content) }</h6> }
        </div>
     );
}
 
export default Print_Post;