import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { GameDetail } from "./components/GameDetail"
import { SportProvider } from "./providers/SportProvider"


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
