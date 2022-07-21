import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Test from './components/test'
import Home from './components/home';
import Footer from './components/footer';
import Login from './components/login';
import Dashboard from './components/dashboard';
import DashNavBar from './components/dashNavBar';
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

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/dashboard">
      <DashNavBar />
      <Dashboard />
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
