import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";

function MobileNavBar() {
    return (
        <div className="h-screen">
            <IconContext.Provider value={{ size: "50px", color: "white" }}>
                <IoMenu className="absolute z-10" />
            </IconContext.Provider>

            <div className='md:hidden absolute text-white flex flex-col pt-16 bg-black h-full opacity-80'>


                <button className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Home</button>
                <button className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">About</button>
                <button className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Skills</button>
                <button className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">Work Experience</button>
                <button className=" text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-8 text-center me-2 mb-2">About</button>

            </div>
        </div>

    )
}
export default MobileNavBar