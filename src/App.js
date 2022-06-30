import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Error from "./pages/Error"

function App() {
  return (
    <div className="App">
      {/* React Router 6 Tutorial */}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
      <div>19:22</div>
    </div>
  )
}

export default App
