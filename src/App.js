import './App.css';
import Navbar from "./components/Navbar";
import Nameheader from "./components/Nameheader";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nameheader />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
