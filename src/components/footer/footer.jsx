import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdMail } from "react-icons/md";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        {/* That's all{" "} */}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="mailto:keerthanns091@gmail.com" target="_blank" rel="noreferrer">
          {" "}
          <MdMail className="social" />
        </a>
        <a href="https://github.com/keerthan2002" target="_blank" rel="noreferrer">
          <AiFillGithub className="social" />
        </a>
        <a href="https://instagram.com/keerthan_ns" target="_blank" rel="noreferrer">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.linkedin.com/in/keerthan-n-s-220142208/" target="_blank" rel="noreferrer">
          {" "}
          <AiFillLinkedin className="social" />
        </a>
      </div>
      <div className="designed text-center text-1xl dark:text-white">Designed with ❤️ by <a href="https://github.com/keerthan2002" target="_blank" rel="noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">Keerthan NS</a></div>
    </div>
  );
}
export default Footer;
