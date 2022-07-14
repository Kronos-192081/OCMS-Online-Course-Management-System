import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Test from './components/test'
import Home from './components/home';
import Footer from './components/footer';
import Announce from './components/announcementlist';
import Announce_indi from './components/announcements_individual';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Posts from './components/postlist';
import Post_indi from './components/posts_indiv';
import Courses from './components/courselist';
import Class from './components/classlist';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
      <Switch>
      <Route exact path="/">
        <Home />
        <Test />
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
      <Route path="/announcements/:id">
        <Announce_indi />
      </Route>
      <Route path="/courses/:id">
        <Class />
      </Route>
      <Route path="/posts/:id">
        <Post_indi />
      </Route>
      </Switch> 
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
