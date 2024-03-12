import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";

function HomeSection() {
    return (
        <div className="flex flex-col  md:ml-24 text-white ">

            <h1 className="text-5xl md:mt-48 ">Hello! I'm Felix Lerner</h1>
            <p className="my-8 max-w-96 ml-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula iaculis volutpat. Quisque fringilla risus ligula, sit amet facilisis nisi pellentesque id ...</p>
            <button className="max-w-44 focus:outline-none text-black text-xl bg-[#d9ff54] hover:bg-[#9fbd39] focus:ring-2 focus:ring-[#e3ecc2] font-medium rounded-lg py-2.5 my-6 flex items-center justify-center">Download CV<IoMdDownload className="mt-1 ml-2" /></button>

            <div className="flex my-10">
                <IconContext.Provider value={{ color: "#d9ff54", size: "25px" }}>
                    <a href="https://www.github.com/flerner"><FaGithub className="mx-4" /></a>
                    <a href="https://www.linkedin.com/in/flerner"><FaLinkedinIn className="mx-4" /></a>
                    <a href="mailto:felix.lerner01@gmail.com"><SiGmail className="mx-4" /></a>
                </IconContext.Provider>

            </div>
        </div>

    )
}
export default HomeSection