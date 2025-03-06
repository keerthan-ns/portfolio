import './App.css'
import { Fragment } from "react"
import Loader from './Loaders/Loader'
import Header from "./components/header/header"
import Home from "./components/home/home"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Techs from "./components/tech/tech"
import Footer from "./components/footer/footer"
import Project from './components/project/project'
import Navbar from "./components/nav/nav"
import { Analytics } from '@vercel/analytics/react'

function App() {
  // const [loading , setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
    
  // }, [])

  // if(loading){
  //   return(<>
  //     <Loader/>
  //   </>)
  // }

  return (
    <Fragment>
      <Loader/>
      <Analytics/>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <section className='section' id='homeSect'>
        <div id="home" className='h-screen '>
          <img src={'https://res.cloudinary.com/dg7etzwks/image/upload/v1683852442/portfolioProjects/cegavi7l1m0grdabdbhn.jpg'} className='h-screen absolute w-full self-center object-cover' alt='background'/>        
          <Header/>
          <Home />
        </div>
      </section>
      <section className='section' id='aboutSect'>
        <About />
      </section>
      <section className='section' id='techSect'>
        <Techs />
      </section>
      <section className='section' id='projectSect'>
        <Project/>
      </section>
      <section className='section' id='contactSect'>
        <Contact />
      </section>
        <Footer />
      <Navbar/>
    </Fragment>
  );
}

export default App
