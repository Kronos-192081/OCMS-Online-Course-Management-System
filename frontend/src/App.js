import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Test from './components/test'
import Home from './components/home';
import Footer from './components/footer';
import Login from './components/login';
import Dashboard from './components/dashboard';
import DashNavBar from './components/dashNavBar';
import Documentation from './components/documentation';
import Profile from './components/profile';
import Edit from './components/edit';
import PostEdit from './components/post_edit';
import Post_admin from './components/post_admin';
import Announce from './components/announcementlist';
import Announce_indi from './components/announcements_individual';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/postlist';
import Post_indi from './components/posts_indiv';
import Courses from './components/courselist';
import Class from './components/classlist';
import Subjects from './components/subjectlist';
import Proceedings from './components/subject_course_pro';
import Error from './components/error_page';
import Announcement_admin from './components/announcements_admin';
import AnnouncementEdit from './components/announcement_edit';
import Courses_admin from './components/courses_admin';
import CourseEdit from './components/course_edit';
import ClassEdit from './components/class_edit';
import SubEdit from './components/subject_edit';
import SubProEdit from './components/subject_proceeding_edit';
import Classlist_admin from './components/classlist_admin';
import Subject_admin from './components/subject_admin';
import Proceedings_admin from './components/subject_course_pro_admin';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/dashboard">
      <DashNavBar />
      <Dashboard />
    </Route>
    <Route exact path="/profile">
      <DashNavBar />
      <Profile />
    </Route>
    <Route exact path="/edit">
      <DashNavBar />
      <Edit />
    </Route>
    <Route exact path="/documentation">
      <DashNavBar />
      <Documentation />
    </Route>
    <Route exact path="/post_admin">
      <DashNavBar />
      <Post_admin />
    </Route>
    <Route exact path="/post_edit/:id">
      <DashNavBar />
      <PostEdit />
    </Route>
    <Route exact path="/post_create/:id">
      <DashNavBar />
      <PostEdit />
    </Route>
    <Route exact path="/announcements_admin">
      <DashNavBar />
      <Announcement_admin />
    </Route>
    <Route exact path="/announcement_edit/:id">
      <DashNavBar />
      <AnnouncementEdit />
    </Route>
    <Route exact path="/announcement_create/:id">
      <DashNavBar />
      <AnnouncementEdit />
    </Route>
    <Route exact path="/course_edit/:id">
      <DashNavBar />
      <CourseEdit />
    </Route>
    <Route exact path="/course_create/:id">
      <DashNavBar />
      <CourseEdit />
    </Route>
    <Route exact path="/class_edit/:id/:class_id">
      <DashNavBar />
      <ClassEdit />
    </Route>
    <Route exact path="/class_create/:id/:class_id">
      <DashNavBar />
      <ClassEdit />
    </Route>
    <Route exact path="/sub_edit/:id/:class_id/:pro_id">
      <DashNavBar />
      <SubEdit />
    </Route>
    <Route exact path="/sub_create/:id/:class_id/:pro_id">
      <DashNavBar />
      <SubEdit />
    </Route>
    <Route exact path="/subpro_edit/:id/:class_id/:pro_id/:tab_id">
      <DashNavBar />
      <SubProEdit />
    </Route>
    <Route exact path="/subpro_create/:id/:class_id/:pro_id/:tab_id">
      <DashNavBar />
      <SubProEdit />
    </Route>
    <Route exact path="/courses_admin">
      <DashNavBar />
      <Courses_admin />
    </Route>
    <Route exact path="/classlist_admin/:id">
      <DashNavBar />
      <Classlist_admin />
    </Route>
    <Route exact path="/subject_admin/:id/:class_id">
      <DashNavBar />
      <Subject_admin />
    </Route>
    <Route exact path="/proceed_admin/:id/:class_id/:pro_id">
      <DashNavBar />
      <Proceedings_admin />
    </Route>
    <Route path="*">
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Home />
        <Test />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/announcements">
        <Announce />
      </Route>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/courses">
        <Courses />
      </Route>
      <Route exact path="/announcements/:id">
        <Announce_indi />
      </Route>
      <Route exact path="/courses/:id">
        <Class />
      </Route>
      <Route exact path="/courses/:id/:class_id">
        <Subjects />
      </Route>
      <Route exact path="/courses/:id/:class_id/:pro_id">
        <Proceedings />
      </Route>
      <Route exact path="/posts/:id">
        <Post_indi />
      </Route>
      <Route path="*">
        <Error />
      </Route>
      </Switch> 
      <Footer />
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
