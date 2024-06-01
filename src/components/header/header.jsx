import './header.css'
import { Typewriter } from "react-simple-typewriter"

function Header() {
  const status= ['Full-Stack Web Developer','Product Engineer']
  return (
    <div id='home' className='containerH header-container'>
      <h3>
        <p>
          Hello there<span>!  </span>
          I<span>'</span>m
        </p>
        Keerthan NS
      </h3>
      <h2><Typewriter words={status} loop={0} cursor/></h2>
    </div>
  );
}
export default Header
