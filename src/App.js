import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
/*import "./App.css";*/
import Main from "./Main";
import Topo from "./topo";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="topo" element={<Topo />} />
            </Routes>
        </div>
    );
}

export default App;