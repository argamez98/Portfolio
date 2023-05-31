import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App bg-gradient-to-r from-slate-900 from-30% via-slate-700 via-70% to-slate-600">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/bio"
                        element={<About/>}></Route>
                    <Route path="/"
                        element={<Home/>}></Route>
                    <Route path="/projects"
                        element={<Projects/>}></Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
