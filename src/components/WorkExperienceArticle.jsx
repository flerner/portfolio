function WorkExperienceArticle() {
    return (
        <article className="flex flex-col md:flex-row items-center border border-[#fff] rounded-lg p-10">
            <div className="flex flex-col text-black md:items-center md:justify-center md:min-w-44 md:max-h-20 bg-[#d9ff54] rounded-2xl p-4">
                <b className="text-2xl text-center">Web developer</b>
                <p className="text-xs">22-02-2022 - 15-08-2023</p>
            </div>
            <div className="ml-20 flex flex-col  max-w-2xl text-white">
                <b className="text-2xl">Armando Lío</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula iaculis volutpat. Quisque fringilla risus ligula, sit amet facilisis nisi pellentesque id ...</p>
            </div>
        </article>
    )
}
export default WorkExperienceArticle