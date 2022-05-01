import './App.css';
import Navbar from "./components/Navbar";
import Nameheader from "./components/Nameheader";
import About from "./components/About";
import HeroBanner from './components/HeroBanner';
import IconBar from './components/IconBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Nameheader />
        <HeroBanner />
      </header>
        <About />
    </div>
  );
}

export default App;
