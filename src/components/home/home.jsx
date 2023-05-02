import './home.css';
import img from '../props/avatar.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import React,{useEffect} from 'react';

function Home() {
  useEffect(() => {
    const toggle = document.querySelector('.hover-show');
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
    });
  },);
  

  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p className='indent-10 text-justify'>
          I am currently pursuing BE in Computer Science and  I have a strong interest in web development.
          I am working working on becoming a full-stack web developer. I find the process of creating websites and applications very satisfying and I enjoy the challenges that comes with it.
        </p>
        <p  className='indent-10 text-justify'>In my free time, I am crazy about gaming. It is a great way to unwind and relax after a long day. I enjoy playing games from various
          genres, including Open-world like GTA5, strategy, racing games.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}


export default Home;
