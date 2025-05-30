import "./about.css"
import {motion} from 'framer-motion'

const education=[
  {
    timeline:'2021-2024',
    name:'NMAM Institute of Technology, Nitte',
    designation:'BE in Computer Science'
  },{
    timeline:'2018-2021',
    name:'NRAM Polytechnic, Nitte',
    designation:'Diploma in Computer Science'
  },{
    timeline:'2006-2018',
    name:'Dr.NSAM English Medium High School, Nitte',
    designation:'Secondary Education'
  }
]
const experience=[
  {
    timeline:'Aug 2024- Present',
    name:'Edgeverve Systems (Infosys finacle)',
    designation:'Product Engineer'
  },{
    timeline:'Feb 2024- Jul 2024',
    name:'Edgeverve Systems Pvt. Ltd',
    designation:'Product Engineer Intern'
  },{
    timeline:'Aug 2022-Feb 2024',
    name:'Inspirante Technology Pvt. Ltd, Udupi',
    designation:'Full-stack Web Dev Intern'
  },{
    timeline:'Aug 2021-Sept 2021',
    name:'Vitvara Technology, Mangalore',
    designation:'Web Development Intern'
  }
]

function About() {
  return (
    <>
      <div id="about" className='container abt-container'>
        <h2>
          <span>About Me</span> <br />
            {/* I am currently pursuing BE in Computer Science and  I have a strong interest in web development.
            I am also working on becoming a full-stack web developer. I find the process of creating web applications and software apps very satisfying and I enjoy the challenges that comes with it.
            In my free time, you can find me watching movies or gaming. It is a great way to unwind and relax after a long day. I enjoy playing games from various
            genres, including Open-world like GTA5, strategy, racing games. */}
          <p className=' indent-10 text-justify'>
            Hi there! I'm Keerthan NS. A Full-Stack Web developer, having a strong interest in web development. I build responsive and scalable
            web applications using latest tools and frameworks. I find the process of creating web applications and software apps very satisfying
            and I enjoy the challenges that comes with it. In my free time, you can find me watching movies or gaming. It is a great way to unwind
            and relax after a long day. I enjoy playing games from various genres, including Open-world like GTA5, strategy, racing games.
          </p>
        </h2>
        <div className="flex flex-col md:flex-row md:gap-6">
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium text-slate-100 pt-8 pb-3">
              <span>Experience</span>
            </h2>
            <div>
              {experience?.map((item, index) => (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  key={index}
                  className={`mt-4 ml-2 border-l-2 pl-2 py-2`}
                >
                  <h1 className="text-lg text-slate-200 m-0 text-left">{item.name}</h1>
                  <p className="w-full text-sm text-slate-400/50 gap-4 flex">
                    <span>{item.timeline}</span>
                    <span>{item.designation}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium text-slate-100 pt-8 pb-3">
              <span>Education</span>
            </h2>
            <div>
              {education?.map((item, index) => (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  key={index}
                  className={`mt-4 ml-2 border-l-2 pl-2 py-2`}
                >
                  <h1 className="text-lg text-slate-200 m-0 text-left">{item.name}</h1>
                  <p className="w-full text-sm text-slate-400/50 gap-4 flex">
                    <span>{item.timeline}</span>
                    <span>{item.designation}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About
