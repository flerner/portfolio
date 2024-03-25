import NetflixImage from "../assets/images/netflix-clone.jpg"
import { FaGithub } from "react-icons/fa";
function Project() {
    return (
        <div class="max-w-sm bg-slate-900 border border-[#d9ff54] rounded-lg shadow ">
            <a href="#">
                <img class="rounded-t-lg" src={NetflixImage} alt="Netflix Clone" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-white">A Netflix landing page, where you can play movie and tv shows trailers</p>
                <div className="flex justify-between">
                    <a href="https://netflix-clone-rust-chi.vercel.app/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#9fbd39] rounded-lg hover:bg-[#7d952f] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Visit
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href="https://github.com/flerner/netflix-clone" target="_blank" className="flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#9fbd39] rounded-lg hover:bg-[#7d952f] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <span>GitHub</span>
                        <FaGithub className="ml-2" />
                    </a>

                </div>

            </div>
        </div>
    )
}
export default Project