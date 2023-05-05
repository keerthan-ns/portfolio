import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TiCodeOutline } from "react-icons/ti";
import { BiCodeBlock, BiMessage} from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { GoFlame } from "react-icons/go";
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
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#skills">
        {/* <TiGroupOutline className="icon" /> */}
        <GoFlame className="icon" />
        {/* <TiWaves className="icon" /> */}
      </a>
      <a href="#project">
        {/* <BsArrowDownCircle className="icon" /> */}
        {/* <BiCodeBlock className="icon" /> */}
        <TiCodeOutline className="icon" />
      </a>
      <a href="#contact">
        <BiMessage className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
