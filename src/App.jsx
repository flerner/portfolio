
import { useState } from 'react'
import './App.css'
import MobileNavBar from './components/MobileNavBar'
import NavBar from './components/NavBar'
import HomeSection from './components/HomeSection'
import NavOptions from "./NavOptions.js"
import ProjectsSection from "./components/ProjectsSection.jsx"
import SkillsSection from "./components/SkillsSection.jsx"
import WorkExperienceSection from "./components/WorkExperienceSection.jsx"
function App() {
  const [sectionActive, setSectionActive] = useState("")
  let section = <HomeSection />
  console.log(sectionActive)
  switch (sectionActive) {
    case NavOptions.HomeSection:
      section = <HomeSection />
      break
    case NavOptions.ProjectsSection:
      section = <ProjectsSection />
      break
    case NavOptions.SkillsSection:
      section = <SkillsSection />
      break
    case NavOptions.WorkExperienceSection:
      section = <WorkExperienceSection />
      break

    default: <HomeSection />
  }
  const handleOptionSelect = (option) => {
    setSectionActive(option)
  }
  return (
    <div className='flex'>
      <div className='hidden md:block'>
        <NavBar onSelectOption={handleOptionSelect} />
      </div>

      {/* Mobile menu */}
      <MobileNavBar onSelectOption={handleOptionSelect} />

      <div className='flex flex-1  h-full md:m-0  m-auto md:ml-64 lg:ml-80 transition-all duration-300 justify-center items-center md:justify-start ease-in-out border border-black bg-gradient-to-r from-zinc-950 to-gray-900'>
        {section}

      </div>

    </div>


  )
}

export default App
