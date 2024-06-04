import WorkExperienceArticle from "./WorkExperienceArticle"


const armandoLio = {
    description: `Developed and maintained a web solution for a clothing company to market their products online 
    with the platform TiendaNube. Responsible for
    requirements analysis, marketing their products through advertisement, 
    give visibility in their social media and mantain their website keeping updated and making new content, and editing their visual content for social media and website with the tool Photoshop `,
    title: "Community Manager",
    position: "Armando Lio",
    dates: "Oct-2021 - Nov-2022",
}
const systemAnalist = {
    description: `I developed here professional abilities to understand the coding in it's deep form and learning 
    lots of technologies in the process. In skill section are displayed some of them. Developed my skills to work in teams with agile methodologies, in professional enviroment such as our final project where we had to simulate a professional work enviroment
    `,
    title: "System Analist",
    position: "Ort Argentina",
    dates: "Mar-2022 - Mar-2024"
}
const highSchool = {
    description: `Here I started my trajectory in tech world, where I chose the orientation Technical High School Diploma with a focus on Computer Science and Digital Media Communication. Here I developed my passion for techonologies with C++ as a base`,
    title: "Technical High School",
    position: "Ort Argentina",
    dates: "Mar-2014 - Nov-2018"
}
const professor = {
    description: ``
}
function WorkExperienceSection() {
    return (
        <div className="flex flex-col justify-center m-auto  gap-8">
            <div>
                <h1 className="text-white text-center text-[40px]">Work</h1>
                <WorkExperienceArticle description={systemAnalist.description} title={systemAnalist.title} position={systemAnalist.position} dates={systemAnalist.dates} />
                <WorkExperienceArticle description={highSchool.description} title={highSchool.title} position={highSchool.position} dates={highSchool.dates} />
            </div>
            <hr />
            <div>
                <h1 className="text-white text-center text-[40px]">Education</h1>
                <WorkExperienceArticle description={armandoLio.description} title={armandoLio.title} position={armandoLio.position} dates={armandoLio.dates} />
                <WorkExperienceArticle description={armandoLio.description} title={armandoLio.title} position={armandoLio.position} dates={armandoLio.dates} />
            </div>


        </div>

    )
}
export default WorkExperienceSection