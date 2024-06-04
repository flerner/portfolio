import Project from "./Project"
import NetflixImage from "../assets/images/netflix-clone.jpg"
import AirbnbImage from "../assets/images/airbnb-land.jpg"

function ProjectsSection() {
    return (

        <div className="flex flex-col justify-center m-auto mt-10 h-full md:h-screen">
            <div className="md:grid md:grid-cols-2 gap-14">

                <Project
                    title="Airbnb Clone"
                    description="A fullstack Airbnb clone, with register, log in with google/github where you can create, reservate and see properties published. Made with Nextjs, MongoDB, Prisma, Nextauth"
                    image={AirbnbImage}
                    githubLink="https://github.com/flerner/airbnb-clone"
                    link="https://rent-app-clone-iota.vercel.app/"
                />
                <Project
                    title="Netflix Clone"
                    description="A frontend clone with the landing page of the most consumed streaming platform. Can reproduce trailers, if copyright allows, if not, a random video reagring that movie/tv show will reproduce"
                    image={NetflixImage}
                    githubLink="https://github.com/flerner/netflix-clone"
                    link="https://streaming-app-clone.vercel.app/"
                />

            </div>
        </div>



    )
}
export default ProjectsSection