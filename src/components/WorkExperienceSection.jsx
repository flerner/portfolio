import WorkExperienceArticle from "./WorkExperienceArticle"


const armandoLio = {
    description: `Developed and maintained a web solution for a clothing company to market their products online 
    with the platform TiendaNube. Responsible for
    requirements analysis, marketing their products through advertisements, 
    giving visibility in their social media and maintaining their website, keeping it updated and creating new content, and editing their visual content for social media and website with the tool Photoshop.`,
    title: "CM",
    position: "Armando Lio",
    dates: "Oct-2021 - Nov-2022",
}

const systemAnalyst = {
    description: `I developed professional abilities to understand coding in its deep form and learned 
    many technologies in the process. The skills section displays some of them. Developed my skills to work in teams with agile methodologies, in a professional environment such as our final project where we had to simulate a professional work environment.`,
    title: "System Analyst",
    position: "Ort Argentina",
    dates: "Mar-2022 - Mar-2024"
}

const highSchool = {
    description: `Here I started my trajectory in the tech world, where I chose the orientation "Technical High School Diploma with a focus on Computer Science and Digital Media Communication". Here I developed my passion for technologies with C++ as a base.`,
    title: "High School",
    position: "Ort Argentina",
    dates: "Mar-2014 - Nov-2018"
}

const professor = {
    description: `I've been a private piano professor for over 3 years now. I like to apply my studies in the university of music to form new pianists. I have had over 20 students in my trajectory and I like to be in constant development to improve my teaching skills.`,
    title: "Piano Professor",
    position: "My home",
    dates: "Mar-2019 - Present"
}

const university = {
    description: `Since I was 9, I have played the piano. As soon as I finished high school, I started university studying music, with a focus on piano, at the most prestigious music university in the country.`,
    title: "University",
    position: "Universidad Nacional de las Artes (UNA)",
    dates: "Mar-2019 - Present"
}

function WorkExperienceSection() {
    return (
        <div className="flex flex-col justify-center m-auto  gap-8">
            <div className="flex flex-col gap-3">
                <h1 className="text-white text-center text-[40px]">Education</h1>
                <WorkExperienceArticle description={highSchool.description} title={highSchool.title} position={highSchool.position} dates={highSchool.dates} />
                <WorkExperienceArticle description={systemAnalyst.description} title={systemAnalyst.title} position={systemAnalyst.position} dates={systemAnalyst.dates} />
                <WorkExperienceArticle description={university.description} title={university.title} position={university.position} dates={university.dates} />
            </div>
            <hr />
            <div className="flex flex-col gap-3">
                <h1 className="text-white text-center text-[40px]">Work</h1>
                <WorkExperienceArticle description={armandoLio.description} title={armandoLio.title} position={armandoLio.position} dates={armandoLio.dates} />
                <WorkExperienceArticle description={professor.description} title={professor.title} position={professor.position} dates={professor.dates} />
            </div>


        </div>

    )
}
export default WorkExperienceSection