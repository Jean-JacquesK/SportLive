import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { SportProvider } from "./context/SportContext"


function App() {

  return (
    <BrowserRouter>
      {/* Routes et autres composants */}
      <SportProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SportProvider>
    </BrowserRouter>
  )
}

export default App
