import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Restaurants from './Restaurants'
import Restaurant from './Restaurant'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Restaurants />} />
      <Route path="/restaurants/:id" element={<Restaurant />} />
    </Routes>
    </BrowserRouter >
  )
}

export default App
