import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { background, Link, Slider } from '@chakra-ui/react'
import { Parallax,ParallaxProvider } from 'react-scroll-parallax'
import useBreakpoints from '../../hooks/useBreakpoint'
import {Carousel} from '3d-react-carousal';
import p1 from '../Projects/ProjectImg/1.png'
import p2 from '../Projects/ProjectImg/2.png'
import p3 from '../Projects/ProjectImg/3.png'
import p4 from '../Projects/ProjectImg/4.png'
import p5 from '../Projects/ProjectImg/5.png'
import {Slider as ProjectSlider} from 'react-draggable-slider'

function Project() {
    let proArray=[
        <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p1}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />,
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p2}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />,
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p3}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />,
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p4}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />,
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p5}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />
    ];
    let slides = [
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />   ];

    const projectList = [
        {
            title: "Nature's Life",
            image: p1,
            description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
        }
        // {
        //     title: "Into The Waters",
        //     image: p2,
        //     description: "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        // },
        // {
        //     title: "Nature's Life",
        //     image: p3,
        //     description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
        // },
        // {
        //     title: "Into The Waters",
        //     image: p4,
        //     description: "Duis at tellus vitae velit aliquet varius. Fusce luctus libero et ligula tristique lobortis. Vestibulum eu placerat risus, eu semper augue. Integer at purus sit amet elit pretium viverra. Suspendisse id fringilla nibh, nec dictum urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        // },
        // {
        //     title: "Nature's Life",
        //     image: p5,
        //     description: "Praesent quis congue nisi. Vivamus dapibus suscipit magna at imperdiet. Mauris consectetur pharetra metus eu suscipit. Maecenas augue tortor, consequat vitae lacus id, pharetra tempor mauris. Suspendisse sodales commodo erat, non imperdiet nisl scelerisque at. Nulla porttitor gravida diam, in ornare ipsum accumsan bibendum. Morbi ut ante metus. "
        // }
    ];


        const sliderSettings = {
            data: projectList,
            // speed: 3000,
            // bgColor: "#070707",
            // showButton: true,
            // buttonText: "View projects",
            // buttonHref: "https://www.example.com",
            // buttonTarget: "_self"
          };
    return (
        <>
            {/* <ProjectSlider sliderSettings={sliderSettings} /> */}
            {/* <Carousel slides={proArray} autoplay={true} interval={3000}/> */}
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p1}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p1}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p1}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "Tailwind Css", "Three JS"]}
                src={p1}
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="/"
            />
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
                        <Link href={props.link ? props.link : props.github}>
                            <h2 target="_blank" className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase  tracking-wider md:order-2">{props.name}</h2>
                        </Link>
                        <div className='gap-3  md:tracking-wide inline-flex  justify-start  flex-wrap  text-sm '>
                            {props.tech.map((ele, i) => <a className='whitespace-nowrap' key={i}>{ele}</a>)}
                        </div>
                        <div className={`${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10"}
                    md:border-2 border-sky-700 /20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70   ease-in-out  dark:border-slate-500/50
                        transform ease-liner    md:p-5  rounded-xl  mx-auto md:backdrop-blur-md `}>
                            {props.description}
                        </div>
                        <div className="inline-flex gap-3 pt-3 text-2xl ">
                            {props.github &&
                                <Link href={props.github} target="_blank">
                                    {/* <a target="_blank"> */}
                                        <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300  " />
                                    {/* </a> */}
                                </Link>
                            }
                            {
                                props.link &&
                                <Link href={props.link} target="_blank">
                                    {/* <a target="_blank"> */}
                                        <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300 " />
                                    {/* </a> */}
                                </Link>
                            }
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </div>
        </div>
    </div>)
}