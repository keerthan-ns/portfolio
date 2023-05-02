import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

// const toggle = document.querySelector('.hover-show');

// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active');
// });

// let Icons = document.querySelectorAll('.navigation .icon');

// Icons.forEach((icon) => {
//   icon.addEventListener('click', () => {
//     changeactive();
//     icon.classList.add('active-nav');
//   });
// });

// function changeactive() {
//   Icons.forEach((icon) => {
//     icon.classList.remove('active-nav');
//   });
// }
