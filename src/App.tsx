import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { SportProvider } from "./context/SportContext"
import { GameDetail } from "./components/GameDetail"


function App() {

  return (
    <BrowserRouter>
      {/* Routes et autres composants */}
      <SportProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameID" element={<GameDetail />} />
        </Routes>
      </SportProvider>
    </BrowserRouter>
  )
}

export default App
