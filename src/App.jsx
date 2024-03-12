
import { useState } from 'react'
import './App.css'
import MobileNavBar from './components/MobileNavBar'
import NavBar from './components/NavBar'
import HomeSection from './components/HomeSection'
import NavOptions from "./NavOptions.js"
import AboutSection from "./components/AboutSection.jsx"
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
    case NavOptions.AboutSection:
      section = <AboutSection />
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
      <div className='hidden md:block'><NavBar onSelectOption={handleOptionSelect} /></div>

      {/* Mobile menu */}
      <MobileNavBar />

      <div className='flex flex-1 px-4 h-screen  m-auto md:ml-80 justify-center items-center md:justify-start transition-all duration-300 ease-in-out border border-black bg-gradient-to-r from-zinc-950 to-gray-950'>
        {section}

      </div>

    </div>


  )
}

export default App
