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
      <Route path="/announcements">
        <Announce />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/google/:id">
        <Announce_indi />
      </Route>
      </Switch> 
      <Footer />  
    </div>
    </Router>
  );
}

export default App;
