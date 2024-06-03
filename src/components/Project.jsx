import NetflixImage from "../assets/images/netflix-clone.jpg"
import { FaGithub } from "react-icons/fa";
function Project({ title, githubLink, link, image, description }) {
    return (
        <div className="max-w-sm bg-slate-900 border border-[#d9ff54] rounded-lg shadow ">
            <h1 className="text-center text-red-900 text-lg p-3">{title}</h1>
            <a href="#">
                <img className="rounded-t-lg" src={image} alt="Netflix Clone" />
            </a>
            <div className="p-5">

                <p className="mb-3 font-normal text-white">{description}</p>
                <div className="flex justify-between">
                    <a href={link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#9fbd39] rounded-lg hover:bg-[#7d952f] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Visit
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href={githubLink} target="_blank" className="flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#9fbd39] rounded-lg hover:bg-[#7d952f] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <span>GitHub</span>
                        <FaGithub className="ml-2" />
                    </a>

                </div>

            </div>
        </div>
    )
}
export default Project