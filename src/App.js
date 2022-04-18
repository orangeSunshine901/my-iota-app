import "./App.css"
import Home from "./Home";
import About from "./About";
import Button from "./Button"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/get-started/what-is-iota" element={<About />}/>
        </Routes>
      </Router>
  )
}

export default App