import SkillsGroup from "./SkillsGroup.jsx"
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";



function SkillsSection() {
    const frontendSkills = [
        <IconContext.Provider value={{ size: "50px", color: "#4198a9" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaReact />
                <p>React</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#e2673d", }}>
            <div className="flex flex-col items-center text-white">
                <FaHtml5 />
                <p>HTML</p>
            </div>
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#266b9f" }}>
            <div className="flex flex-col items-center text-white">
                <FaCss3Alt />
                <p>CSS</p>
            </div>
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#eddb4f" }}>
            <div className="flex flex-col items-center text-white">
                <IoLogoJavascript />
                <p>Javascript</p>
            </div>
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#27b7a5" }}>
            <div className="flex flex-col items-center text-white">
                <SiTailwindcss />
                <p>Tailwind</p>
            </div>
        </IconContext.Provider>,
    ]
    const backendSkills = [
        <IconContext.Provider value={{ size: "50px", color: "#72a864" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaNode />
                <p>Node</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#199555" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <DiMongodb />
                <p>MongoDB</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <SiExpress />
                <p>ExpressJS</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#f8a721" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <IoLogoFirebase />
                <p>Firebase</p>
            </div>

        </IconContext.Provider>,
    ]
    const learningSkills = [
        <IconContext.Provider value={{ size: "50px", color: "#007d9c" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaGolang />
                <p>Golang</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#2f74c0" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <SiTypescript />
                <p>Typescript</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#525252" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaUnity />
                <p>Unity</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px" }}>
            <div className="flex flex-col items-center text-white  50px md: 70px ">

                <SiPrisma />
                <p>Prisma</p>

            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#fb4a05" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaUbuntu />
                <p>Ubuntu</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", }}>
            <div className="flex flex-col items-center text-white  50px md: 70px ">

                <SiNextdotjs />
                <p>Nextjs</p>

            </div>

        </IconContext.Provider>,


    ]
    const tools = [
        <IconContext.Provider value={{ size: "50px", color: "#fff" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaGithub />
                <p>Github</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#007acc" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <TbBrandVscode />
                <p>VsCode</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#f05639" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaGitAlt />
                <p>Github</p>
            </div>

        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#cd3e3d" }}>
            <div className="flex flex-col items-center text-white 50px md: 70px ">
                <FaNpm />
                <p>Github</p>
            </div>

        </IconContext.Provider>,
    ]

    return (
        <div className="flex flex-col justify-center gap-16 md:h-screen mx-6 md:mx-8 xl:mx-24 h-full">
            <h1 className="text-white text-4xl">My skills</h1>
            <div className="flex  justify-center items-center md:justify-start ">
                <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-4">
                    <SkillsGroup icons={frontendSkills} title="Frontend" />
                    <SkillsGroup icons={backendSkills} title="Backend" />
                    <SkillsGroup icons={learningSkills} title="Learning" />
                    <SkillsGroup icons={tools} title="Tools" />
                </div>
            </div>
        </div>




    )
}
export default SkillsSection
