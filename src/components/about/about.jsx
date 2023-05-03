import "./about.css";
import Qualifications from "../qualifications/qualifications";
import Buttons from '../button/button';

function About() {
  return (
    <>
      <div id="about" className='h-screen container abt-container'>
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
        <Buttons/>
      </div>
      <div className="container about-container">
        <Qualifications />
      </div>
    </>
  );
}
export default About;
