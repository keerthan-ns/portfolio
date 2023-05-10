import './App.css'
import { useEffect, useState } from "react"
import Loader from './Loaders/Loader'
import Header from "./components/header/header"
import Home from "./components/home/home"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Techs from "./components/tech/tech"
import Footer from "./components/footer/footer"
import Project from './components/project/project'
import Navbar from "./components/nav/nav"
import { Img } from 'react-image'

function App() {
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    
  }, [])

  if(loading){
    return(<>
      <Loader/>
    </>)
  }

  return (
      <>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <section id='homeSect'>
          <div id="home" className='h-screen '>
            <Img src={'https://res.cloudinary.com/dg7etzwks/image/upload/v1683643876/portfolioProjects/k0e6d6uhxc3aety2saca.jpg'} className='h-screen absolute w-full self-center object-cover'/>        
            <Header/>
            <Home />
          </div>
        </section>
        <section id='aboutSect'>
          <About />
        </section>
        <section id='techSect'>
          <Techs />
        </section>
        <section id='projectSect'>
          <Project/>
        </section>
        <section id='contactSect'>
          <Contact />
        </section>
          <Footer />
        <Navbar/>
      </>
  );
}

export default App
