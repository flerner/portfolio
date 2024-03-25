import WorkExperienceArticle from "./WorkExperienceArticle"
const armandoLioDescription = "Developed and maintained a web solution for a clothing company to market their products online. Responsible for requirements analysis, software architecture, development, and maintenance using technologies such as React.js, Node.js, and MongoDB. Successfully delivered the project meeting client expectations."
const armandoLioTitle = "Full Stack"
const armandoLioPosition = "Armando Lio"
const armandoLioDates = "Oct-2021 - Nov-2022"
const benedictTitle = "Front End"
const benedictDesc = "I perform freelance work for a professional in the industry, who refers front-end jobs to me. I use the React library for the solutions. Alongside a tester, we use a Scrum methodology with bi-weekly sprints."
const benedictPosition = "Freelance"
const benedictDates = "Oct-2023 - Present"
function WorkExperienceSection() {
    return (
        <div className="flex flex-col h-screen justify-center gap-8">
            <WorkExperienceArticle description={armandoLioDescription} title={armandoLioTitle} position={armandoLioPosition} dates={armandoLioDates} />
            <WorkExperienceArticle description={benedictDesc} title={benedictTitle} position={benedictPosition} dates={benedictDates} />
        </div>

    )
}
export default WorkExperienceSection