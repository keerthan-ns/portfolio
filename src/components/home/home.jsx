import './home.css'
import { BsMouse } from 'react-icons/bs'
import React,{useEffect, useState} from 'react'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai'
import { MdMail } from "react-icons/md"
import { contact } from '../../data/data'
import LoadingSpinner from '../spinner/spinner'
import { RxDoubleArrowUp } from "react-icons/rx"

function Home() {
  const [clicked, setClicked] = useState(false);
  const [toggleEle, setToggleEle] = useState(null);
  const [tapmeEle, setTapmeEle] = useState(null);

  useEffect(() => {
    const toggle = document.querySelector('.hover-show');
    const tapme = document.querySelector('.pulse-span');
    const avatar = document.querySelector('.avatar');
    const pulse = document.querySelector('.pulse-span');
    avatar.classList.add('breathe-effect');
    pulse.classList.add('ping-effect');
    setToggleEle(toggle);
    setTapmeEle(tapme);
  },);
  

  return (
    <div  className='container home-container'>
      <div className='logo'>
        <div onClick={() => {
            toggleEle.classList.toggle('active');
            (tapmeEle.style.visibility === 'hidden') ? tapmeEle.style.visibility = 'visible' : tapmeEle.style.visibility = 'hidden';
            setClicked(!clicked);
          }
        } className='hover-show'>
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
        <div className='avatar'>
          <span className='pulse-span'></span>
          {/* <img src={"https://res.cloudinary.com/dg7etzwks/image/upload/v1683643864/portfolioProjects/toir32dyan8dyxzlmdxb.jpg"} alt='avatarimg' loader={<LoadingSpinner/>}/> */}
          <img src={"https://res.cloudinary.com/dg7etzwks/image/upload/v1683852443/portfolioProjects/xhy9v39vuzy3qzbfgjdf.jpg"} alt='avatarimg' loader={<LoadingSpinner/>}/>
        </div>
      </div>
      <h4 className='tapMe md:relative -top-14 flex flex-col items-center'>
        {
          clicked ?
          <></> :
          <><RxDoubleArrowUp />
          Tap here !!</>
        }
      </h4>
      <a href={contact.resume} target='_blank' rel="noreferrer" className='mt-6 md:mt-8 lg:mt-4 py-1 px-2 bg-gradient-to-t from-purple-700 to-pink-500 rounded-md text-lg font-semibold active:bg-violet-900 active:scale-[0.95] transition-all duration-100'>Download Resume</a>
      <a href='#about' className='scroll-down'>
        <hr />
        <h5>know about me</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
    </div>
  );
}


export default Home
