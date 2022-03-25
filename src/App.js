import './App.css';
import Navbar from "./components/Navbar";
import Nameheader from "./components/Nameheader";
import About from "./components/About";
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nameheader />
        <Navbar />
        <HeroBanner />
      </header>
    </div>
  );
}

export default App;
