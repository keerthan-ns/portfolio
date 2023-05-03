import './home.css';
import img from '../props/avatar.jpg';
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

      <a href='#about' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
    </div>
  );
}


export default Home;
