import './App.css';
import { useEffect, useState } from "react"
import Loader from './Loaders/Loader';
import Navbar from './Navbars/Navbar';
import Project from './components/Projects/Project';

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
     <Project/>     
      {/* <div className="App">
      </div> */}
      <Navbar/>
    </>
  );
}

export default App;
