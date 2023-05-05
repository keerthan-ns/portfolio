import './App.css';
import { useEffect, useState } from "react"
import Loader from './Loaders/Loader';
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Members from "./components/members/members";
import Footer from "./components/footer/footer";

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
        <Navbar/>
        <div id="home" className='h-screen bg-[url("./components/props/bg1.jpg")] bg-cover bg-center'>
          <Header/>
          <Home />
        </div>
        <About />
        <Members />
        <Contact />
        <Footer />
      </>
  );
}

export default App;
