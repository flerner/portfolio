


function SkillsGroup({ icons, title }) {
    return (
        <div className="">
            <h1 className="text-white flex justify-center p-4 text-3xl">
                Frontend
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {icons.map(i => i)}
            </div>
        </div>

    )

}
export default SkillsGroup