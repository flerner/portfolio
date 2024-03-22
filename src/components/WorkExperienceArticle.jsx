function WorkExperienceArticle({ description, title, position, dates }) {
    return (
        <article className="flex flex-col md:flex-row items-center border border-[#fff] rounded-xl p-4 mx-6">
            <div className="flex flex-col text-black md:items-center md:justify-center md:min-w-52 md:max-h-20 bg-[#d9ff54] rounded-2xl p-4">
                <b className="text-2xl text-center">{title}</b>
                <p className="text-xs">{dates}</p>
            </div>
            <div className="ml-9 flex flex-col  max-w-2xl text-white">
                <b className="text-2xl">{position}</b>
                <p>{description}</p>
            </div>
        </article>
    )
}
export default WorkExperienceArticle