function SkillsGroup({ icons, title }) {
    return (
        <div className="bg-gradient-to-r from-black to-transparent rounded-md min-w-40 min-h-32">
            <h1 className="text-white flex justify-center p-4 text-3xl">
                {title}
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {icons.map(i => i)}
            </div>
        </div>

    )

}
export default SkillsGroup