import Project from "./Project"


function ProjectsSection() {
    return (

        <div className="flex flex-col justify-center m-auto mt-10 h-full md:h-screen">
            <div className="md:grid md:grid-cols-2 gap-14">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>



    )
}
export default ProjectsSection