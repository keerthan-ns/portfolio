import './home.css';
import img from '../props/avatar.jpg';
import { BsMouse } from 'react-icons/bs';
import React,{useEffect} from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

function Home() {
  useEffect(() => {
    const toggle = document.querySelector('.hover-show');
    const tapme = document.querySelector('.tapMe');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      (tapme.style.visibility==='hidden')?tapme.style.visibility='visible':tapme.style.visibility='hidden';
      console.log(tapme.style.visibility);
    });
  },);
  

  return (
    <div  className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'><AiFillGithub className='w-12 h-12'/></span>
          <span className='circle'><AiFillInstagram className='w-12 h-12'/></span>
          <span className='circle'></span>
          <span className=''></span>
          <span className=''></span>
          <span className=''></span>
          <span className='circle'></span>
          <span className='circle'><AiFillLinkedin className='w-12 h-12'/></span>
        </div>

        <img src={img} alt='' />
      </div>
      <h4 className='tapMe'>Tap on avatar !!</h4>

      <a href='#about' className='scroll-down'>
        <hr />
        <h5>know about me</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
    </div>
  );
}


export default Home;
