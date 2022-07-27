import useFetch from "./useFetch";
import Announcements from "./announcement";
import Post from "./post";
import Course from "./course";
import {API_URL} from "../constants";

const Test = () => {
  const { error, isPending, data: announcements } = useFetch(API_URL + '/api/announcements');
  const { error: error1, isPending: isPending1, data: posts } = useFetch(API_URL + '/api/posts');
  const { error: error2, isPending: isPending2, data: courses } = useFetch(API_URL + '/api/courses');
    return (
        <div className=" container" id="content">
          <br />
          <br />
            <div className="row row1 mx-n5">
            <div className="col-sm-3 border1 scr">
                <div className="head">
                <br />
                <h4 className= "pad2 center" > <b>Recent Announcements</b></h4>
                <br />
                </div>
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { announcements && <Announcements announcements={announcements.slice(0, 5)} /> }
            <a href = "/announcements" className="right">See All Announcements</a>
            </div>
            <div className="col-sm-5 border1 scr">
                <div className="head">
                <br />
                <h4 className= "pad2 center" > <b>Courses</b></h4>
                </div>
                { error2 && <div>{ error2 }</div> }
                { isPending2 && <div>Loading...</div> }
                { courses && <Course courses={courses} /> }
            <a href = "/courses" className="right">See All Courses</a>
            </div>
            <div className="col-sm-3 border1 scr">
                <div className = "head center">
                <br />
                <h4> <b>Recent Posts</b></h4>
                <br />
                </div>
                { error1 && <div>{ error1 }</div> }
                { isPending1 && <div>Loading...</div> }
                { posts && <Post posts={posts.slice(0, 5)} /> }
            <a href = "/posts" className="right">See All Posts</a>
            </div>
            </div>
            <br />
            <br />
        </div>
    );
}

export default Test;