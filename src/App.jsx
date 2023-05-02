import './App.css';
import { useEffect, useState } from "react"
import Loader from './Loaders/Loader';
import Header from './components/header/header';

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
        <Header/>
      </>
  );
}

export default App;
