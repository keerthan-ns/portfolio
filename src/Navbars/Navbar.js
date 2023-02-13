import React from 'react'
import { useEffect } from 'react'
import "./Navbar.css"
// import menuIcon from "../../icons/menuIcon.png"
import menuIcon from "../icons/menuIcon.png"

function Navbar() {

    useEffect(() => {
        let menuToggle = document.querySelector('.toggle');
            let menu = document.querySelector('.menu');
            menuToggle.onclick = function(){
                menu.classList.toggle('active')
                menuToggle.classList.toggle('active')
            }
            const list = document.querySelectorAll('li');
            function activeLink(){
                list.forEach((item)=>
                    item.classList.remove('active')
                )
                this.classList.add('active')
            }
            list.forEach((item)=>
                item.addEventListener('click',activeLink)
            )
    })
    
  return (
    <>
        <div className="navDiv">
            <ul className="menu">
                <div className="toggle">
                    <img src={menuIcon} className="imageIcon" alt="menuicon"/>
                </div>
                <li style={{"--i":0}} className="active"><a href="#home">Home</a></li>
                <li style={{"--i":1}}><a href="#about">About</a></li>
                <li style={{"--i":2}}><a href="#skills">Skills</a></li>
                <li style={{"--i":3}}><a href="#project">Projects</a></li>
                <li style={{"--i":4}}><a href="#contact">Contact</a></li>
                <li style={{"--i":5}}></li>
                <li style={{"--i":6}}></li>
                <li style={{"--i":7}}></li>
                <div className="indicator"></div>
            </ul>
        </div>
    </>
  )
}

export default Navbar