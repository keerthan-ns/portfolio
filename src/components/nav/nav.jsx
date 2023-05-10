import "./nav.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { TiCodeOutline } from "react-icons/ti"
import { BiMessage} from "react-icons/bi"
import { GoFlame } from "react-icons/go"
import React,{useEffect} from 'react'

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
    const sections = document.querySelectorAll("section");
    
    window.onscroll = () => {
      var current = "";
    
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop-100) {
          current = section.getAttribute("id");
        }
      });
    
      Icons.forEach((icon) => {
        icon.classList.remove("active-nav");
        if (icon.classList.contains(current)) {
          icon.classList.add("active-nav");
        }
      });
    };
  },);
  
  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav homeSect" />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon aboutSect" />
      </a>
      <a href="#tech">
        <GoFlame className="icon techSect" />
      </a>
      <a href="#project">
        <TiCodeOutline className="icon projectSect" />
      </a>
      <a href="#contact">
        <BiMessage className="icon contactSect" />
      </a>
    </div>
  );
}

export default Navbar
