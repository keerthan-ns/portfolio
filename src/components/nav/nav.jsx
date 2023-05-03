import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TiCodeOutline } from "react-icons/ti";
import { BiCodeBlock, BiMessage} from "react-icons/bi";
import React,{useEffect} from 'react';

function Navbar() {
  useEffect(() => {
    let Icons = document.querySelectorAll('.navigation .icon');

    Icons.forEach((icon) => {
      icon.addEventListener('click', () => {
        changeactive();
        icon.classList.add('active-nav');
      });
    });

    function changeactive() {
      Icons.forEach((icon) => {
        icon.classList.remove('active-nav');
      });
    }
  },);
  
  return (
    // ="active"><a href="#home">Home</a></li>
    //             <li style={{"--i":1}}><a href="#about">About</a></li>
    //             <li style={{"--i":2}}><a href="#skills">Skills</a></li>
    //             <li style={{"--i":3}}><a href="#project">Projects</a></li>
    //             <li style={{"--i":4}}><a href="#contact">Contact</a></li>
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#skills">
        {/* <TiGroupOutline className="icon" /> */}
        <TiCodeOutline className="icon" />
        {/* <TiWaves className="icon" /> */}
      </a>
      <a href="#project">
        {/* <BsArrowDownCircle className="icon" /> */}
        <BiCodeBlock className="icon" />
      </a>
      <a href="#contact">
        <BiMessage className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
