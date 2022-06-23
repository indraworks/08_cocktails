import React from "react"
//setup react-router-6
import { BrowserRouter, Routes, Route } from "react-router-dom"

//import pages
import { Home, About, SingleCocktail, Error } from "./pages"
//import components
import Navbar from "./components/Navbar"

//app js dibawah tidak dibuat sbgai nested route
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
