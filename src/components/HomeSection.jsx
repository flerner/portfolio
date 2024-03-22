import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";
import BGImage from "../assets/images/felix-profile.jpg"
import Resume from "../assets/files/resume.pdf"

function HomeSection() {
    return (
        <div className="flex items-center justify-between h-screen">
            <div className="flex flex-col justify-center md:ml-24 text-white ">

                <h1 className="text-5xl md:mt-48 ">Hello! I'm Felix Lerner</h1>
                <p className="my-8 max-w-96 ml-1">Hello! I'm a Full Stack Developer based in Argentina. Welcome to my portfolio, where you can explore my skills, experiences, and projects.</p>
                <a href={Resume} download="Felix Lerner - Resume" className="max-w-44 ">
                    <button className="max-w-44 focus:outline-none text-black text-xl bg-[#d9ff54] hover:bg-[#9fbd39] px-3 focus:ring-2 focus:ring-[#e3ecc2] font-medium rounded-lg py-2.5 my-6 flex items-center justify-center">Download CV<IoMdDownload className="mt-1 ml-2" /></button>
                </a>

                <div className="flex my-10">
                    <IconContext.Provider value={{ color: "#d9ff54", size: "25px" }}>
                        <a href="https://www.github.com/flerner"><FaGithub className="mx-4" /></a>
                        <a href="https://www.linkedin.com/in/flerner"><FaLinkedinIn className="mx-4" /></a>
                        <a href="mailto:felix.lerner01@gmail.com"><SiGmail className="mx-4" /></a>
                    </IconContext.Provider>

                </div>


            </div>
            <div className="hidden md:flex flex-col m-36 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-auto min-w-96 min-h-56 rounded-3xl m-32" style={{ backgroundSize: "cover", backgroundImage: `url(${BGImage})`, zIndex: 1 }} />
                <div className="absolute top-0 left-0 w-full h-full bg-auto min-w-96 min-h-56 rounded-3xl" style={{ backgroundSize: "cover", backgroundImage: `url(${BGImage})`, zIndex: 0 }} />
            </div>


        </div>


    )
}
export default HomeSection