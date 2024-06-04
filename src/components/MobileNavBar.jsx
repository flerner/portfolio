import { useState } from "react";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";
import NavOptions from "../NavOptions.js"
function MobileNavBar({ onSelectOption }) {
    const [menuClicked, setMenuClicked] = useState(false)
    const handleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }
    const handleClick = (option) => {
        onSelectOption(option)
        setMenuClicked(!menuClicked)
    }
    return (
        <div className="h-screen">
            <IconContext.Provider value={{ size: "50px", color: "white" }}>
                <button className="absolute z-10" onClick={handleMenuClick}> <IoMenu /></button>

            </IconContext.Provider>

            {menuClicked && <div className='md:hidden absolute text-white flex flex-col pt-16 bg-black h-full opacity-80 transition-all duration-800'>
                <button onClick={() => handleClick(NavOptions.HomeSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Home</button>
                <button onClick={() => handleClick(NavOptions.ProjectsSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Projects</button>
                <button onClick={() => handleClick(NavOptions.SkillsSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Skills</button>
                <button onClick={() => handleClick(NavOptions.WorkExperienceSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Work Experience</button>
            </div>}
        </div>

    )
}
export default MobileNavBar