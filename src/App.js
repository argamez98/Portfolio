import './App.css';
import Navbar from "./components/Navbar";
import Nameheader from "./components/Nameheader";
import About from "./components/About";
import HeroBanner from './components/HeroBanner';
import IconBar from './components/IconBar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Nameheader />
        <HeroBanner />
        <About />
    </div>
  );
}

export default App;
