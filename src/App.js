import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./pages/About"
import Home from "./pages/Home"
import Error from "./pages/Error"

function App() {
  return (
    <div className="App">
      {/* React Router 6 Tutorial */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
