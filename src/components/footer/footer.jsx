import "./footer.css"
import { BsMouse } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { MdMail } from "react-icons/md"
import { contact } from "../../data/data"

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href={contact.mail} target="_blank" rel="noreferrer">
          {" "}
          <MdMail className="social" />
        </a>
        <a href={contact.github} target="_blank" rel="noreferrer">
          <AiFillGithub className="social" />
        </a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          <BsInstagram className="social" />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          {" "}
          <AiFillLinkedin className="social" />
        </a>
      </div>
      <div className="designed text-center text-1xl dark:text-white">Designed with ❤️ by <a href={contact.github} target="_blank" rel="noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">Keerthan NS</a></div>
    </div>
  );
}
export default Footer
