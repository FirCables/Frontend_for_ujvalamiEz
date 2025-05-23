import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<Restaurants />} />
    </Routes>
    </BrowserRouter >
  )
}

export default App
