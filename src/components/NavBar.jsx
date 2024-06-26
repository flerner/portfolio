import NavOptions from "../NavOptions.js"
import ProfilePhoto from "../assets/images/1685819963770.jpg"
function NavBar({ onSelectOption }) {
    const handleClick = (option) => {
        onSelectOption(option)
    }
    return (
        <div>
            <div className="flex flex-col mx-auto bg-gray-200">
                <aside className="group/sidebar flex flex-col items-center shrink-0 lg:w-[320px] md:w-[260px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-gradient-to-b from-zinc-950 to-gray-950 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start">

                    <div className="py-24 flex flex-col items-center gap-8">
                        <img src={ProfilePhoto} className="w-44 h-44 rounded-full" />
                        <h1 className="text-5xl  text-white">Felix Lerner</h1>
                        <h2 className="text-white text-2xl">System Aanalyst</h2>
                        <h3 className="text-white">React || Node || Mongo</h3>

                    </div>
                    <button onClick={() => handleClick(NavOptions.HomeSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home</button>
                    <button onClick={() => handleClick(NavOptions.ProjectsSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Projects</button>
                    <button onClick={() => handleClick(NavOptions.SkillsSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Skills</button>
                    <button onClick={() => handleClick(NavOptions.WorkExperienceSection)} className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Experience/Education</button>
                </aside>

            </div>

        </div>

    )
}

export default NavBar