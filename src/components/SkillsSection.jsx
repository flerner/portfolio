import SkillsGroup from "./SkillsGroup.jsx"
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
import { SiTailwindcss } from "react-icons/si";

function SkillsSection() {
    const frontendSkills = [
        <IconContext.Provider value={{ size: "50px", color: "#4198a9" }}>
            <div className="flex flex-col items-center text-white">
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
    const backendSkills = []
    const learningSkills = []
    const bgToR = "bg-gradient-to-r from-black to-transparent"
    const bgToL = "bg-gradient-to-l from-black to-transparent"
    return (
        <div className="flex flex-col items-center gap-16 md:ml-24">
            <h1 className="text-white text-4xl">My skills</h1>
            <div className="flex h-full w-full justify-center items-center md:justify-start md:transition duration-200">
                <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-4">
                    <SkillsGroup icons={frontendSkills} title="Frontend" bgStyle={bgToR} />
                    <SkillsGroup icons={frontendSkills} title="Backend" bgStyle={bgToL} />
                    <SkillsGroup icons={frontendSkills} title="Learning" bgStyle={bgToR} />
                    <SkillsGroup icons={frontendSkills} title="Tools" bgStyle={bgToL} />
                </div>
            </div>
        </div>




    )
}
export default SkillsSection
