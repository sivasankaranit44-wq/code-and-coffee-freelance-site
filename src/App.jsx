import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import BookACall from './pages/Bookacall'
import Services from './pages/Services'
import Navbar from './components/Navbar'

function App() {
  return(
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/bookacall' element={<BookACall />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App