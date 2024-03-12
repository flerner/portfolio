import SkillsGroup from "./SkillsGroup.jsx"
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IconContext } from "react-icons";
function SkillsSection() {
    const frontendSkills =
        [<IconContext.Provider value={{ size: "50px", color: "#4198a9" }}>
            <FaReact />
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#e2673d", }}>
            <FaHtml5 />
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#4198a9" }}>
            <FaCss3Alt />
        </IconContext.Provider>,
        <IconContext.Provider value={{ size: "50px", color: "#4198a9" }}>
            <IoLogoJavascript />
        </IconContext.Provider>,]

    return (

        <SkillsGroup icons={frontendSkills} title="Frontend" />

    )
}
export default SkillsSection