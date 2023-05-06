import React,{useState} from 'react'
import "./project.css"
import {motion} from 'framer-motion'
import {AiFillGithub} from 'react-icons/ai'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Autoplay } from 'swiper'
import {projects} from './projectInfo'
import { Parallax,ParallaxProvider } from 'react-scroll-parallax'
import useBreakpoints from '../../hooks/useBreakpoint'

function Project() {
    const [active,setActive] = useState(3);
  return (
    <>
        <div id="project" className='container proj-container'>
            <h2>
                <span>Projects</span>
            </h2>
            <div className='max-w-full self-center mt-10'>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(cur) => setActive(cur.realIndex)}
                loop={true}
                centeredSlides={true}
                speed={800}
                autoplay={{delay:3000,}}
                modules={[Autoplay]}
                >
                {projects.projects.map((item,i)=>(
                    <SwiperSlide key={i}>
                        {/* <div className='h-[420px] flex bg-black'>
                            <div className={`card ${active===i && 'card-active'} overflow-hidden backdrop-blur-md`}> */}
                                {/* <div className='relative bg-black'> */}
                                {/* <div className='relative '>
                                <img src={item.img} alt={item.title} className={`opacity-60`}/> */}
                                {/* <img src="./projectsImg/1.png" alt={item.title} className={`opacity-60`}/> */}
                                {/* <h5 className='absolute bottom-0 p-6 text-3xl text-slate-100 font-medium bg-gradient-to-t from-black to-transparent w-full'>{item.title}</h5> */}
                                {/* </div>
                                <p className='para'>{item.description}</p>
                                <div className='tech-span'>
                                {item.tags.map((tag,i)=>(
                                    <span key={i}>{tag}</span>
                                ))}
                                </div>
                                <a href={`https://github.com/${item.github}`} className={`github ${active===i&&'git-active'}`}><AiFillGithub/></a>
                            </div>
                        </div> */}
                        <ProjectsCard
                            // name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                            name={item.title}
                            // tech={["Next JS", "Tailwind Css", "Three JS"]}
                            tech={item.tags}
                            src={item.img}
                            description={item.description}
                            link="/"
                            github="/"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default Project

function ProjectsCard(props) {
    const { isXs, isSm, isMd } = useBreakpoints();
    return (
        <div className="text-start  md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10 text-white">
        <div className='flex  flex-col  gap-5 md:gap-0 md:max-w-sm md:px-10  lg:max-w-md xl:max-w-xl group  mx-auto md:flex-row items-center justify-center
                    border-2 border-sky-500/50 bg-gradient-to-tl text-base from-cyan-100/40 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50   ease-in-out  dark:border-slate-500/50
                     transform-color ease-liner   p-3 md:p-5 rounded-xl  backdrop-blur  
                    md:border-none md:bg-none
                '>
            <div className={` flex-auto  ${props.reverse ? "md:-translate-x-10" : "md:translate-x-10"}  w-auto  md:p-0`}>
                <img src={props.src}
                    className="md:max-w-lg md:grayscale transition-colors transform duration-100 ease-in-out group-hover:grayscale-0 "
                    alt='project source'/>
            </div>
            <div className={`min-w-fit order-first   ${props.reverse ? "md:order-first md:translate-x-10" : " md:text-end md:order-2 md:-translate-x-10"}`}>
                <ParallaxProvider>
                    <Parallax speed={isXs || isSm ? 0 : 10} className="space-y-2">
                        <a href={props.link ? props.link : props.github}>
                            <h2 target="_blank" className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase  tracking-wider md:order-2"><span className="text-base ml-1 capitalize">{props.name}</span></h2>
                        </a>
                        <div className='gap-3  md:tracking-wide inline-flex  justify-start  flex-wrap  text-sm md:font-semibold text-black '>
                        {/* <div className='gap-3  md:tracking-wide inline-flex  justify-start  flex-wrap  text-sm md:font-semibold'> */}
                            {props.tech.map((ele, i) => <a className='whitespace-nowrap bg-cyan-400 px-2 rounded-full' key={i}  rel="noreferrer">{ele}</a>)}
                        </div>
                        <div className={`${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10"}
                    md:border-2 border-sky-700 /20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70   ease-in-out  dark:border-slate-500/50
                        transform ease-liner    md:p-5  rounded-xl  mx-auto md:backdrop-blur-md `}>
                            {props.description}
                        </div>
                        <div className="inline-flex gap-3 pt-3 text-2xl ">
                            {props.github &&
                                <a href={props.github} target="_blank" rel="noreferrer">
                                    {/* <a target="_blank"> */}
                                        <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300  " />
                                    {/* </a> */}
                                </a>
                            }
                            {
                                props.link &&
                                <a href={props.link} target="_blank"  rel="noreferrer">
                                    {/* <a target="_blank"> */}
                                        <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300 " />
                                    {/* </a> */}
                                </a>
                            }
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </div>
        </div>
    </div>)
}