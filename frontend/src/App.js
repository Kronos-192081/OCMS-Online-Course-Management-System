import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Test from './components/test'
import Home from './components/home';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      < NavBar />
      < Home />
      < Test />
      < Footer />
    </div>
  );
}

export default App;
