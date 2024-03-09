function NavBar() {
    return (
        <div>
            <div className="flex flex-col mx-auto bg-gray-200">
                <aside className="group/sidebar flex flex-col items-center shrink-0 lg:w-[320px] w-[288px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-slate-800 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start">

                    <div className="py-32"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" className="w-44 h-44" /></div>
                    <button className="w-24 text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>
                    <button className="w-24 text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>
                    <button className="w-24 text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>
                    <button className="w-24 text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>
                    <button className="w-24 text-white hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>

                </aside>

            </div>

        </div>

    )
}

export default NavBar