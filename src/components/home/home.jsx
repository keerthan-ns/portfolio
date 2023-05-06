import './home.css'
import img from '../props/avatar.jpg'
import { BsMouse } from 'react-icons/bs'
import React,{useEffect} from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import { MdMail } from "react-icons/md"
import { contact } from '../../data/data'

function Home() {
  useEffect(() => {
    const toggle = document.querySelector('.hover-show');
    const tapme = document.querySelector('.tapMe');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      (tapme.style.visibility==='hidden')?tapme.style.visibility='visible':tapme.style.visibility='hidden';
    });
  },);
  

  return (
    <div  className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'><a href={contact.github} target='_blank' rel='noreferrer'><AiFillGithub className='w-12 h-12'/></a></span>
          <span className='circle'><a href={contact.instagram} target='_blank' rel='noreferrer'><AiFillInstagram className='w-12 h-12'/></a></span>
          <span className='circle'><a href={contact.twitter} target='_blank' rel='noreferrer'><AiFillTwitterCircle className='w-12 h-12'/></a></span>
          <span className=''></span>
          <span className=''></span>
          <span className=''></span>
          <span className='circle'><a href={contact.mail} target='_blank' rel='noreferrer'><MdMail className='w-12 h-12'/></a></span>
          <span className='circle'><a href={contact.linkedin} target='_blank' rel='noreferrer'><AiFillLinkedin className='w-12 h-12'/></a></span>
          <span className=''></span>
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
