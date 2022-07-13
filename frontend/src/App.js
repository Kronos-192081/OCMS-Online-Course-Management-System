import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Test from './components/test'
import Home from './components/home';
import Footer from './components/footer';
import Announce from './components/announcementlist';
import Announce_indi from './components/announcements_individual';

function App() {
  return (
    <div className="App">
      < NavBar />
      < Home />
      < Test />
      {/* <Announce_indi />
      <Announce /> */}
      < Footer />
    </div>
  );
}

export default App;
