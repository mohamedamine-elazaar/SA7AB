import Navbar from  "./Components/Navbar"
import Home from "./Components/Home"
import { Route, Routes } from "react-router"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import { BrowserRouter } from 'react-router'
import Footer from "./Components/Footer"



function App() {
 

  return (
    <>
    <Navbar />
   {/* Routes */}
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Services" element={<Services/>} />
   <Route path="/Projects" element={<Projects/>} />
   <Route path="/About" element={<About/>} />
   <Route path="/Blog" element={<Blog/>} />
   <Route path="/Contact" element={<Contact />} />

   
      
      
     </Routes>
     <Footer/>
    </>
  )
}

export default App
