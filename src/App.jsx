
import './App.css'
import MobileNavBar from './components/MobileNavBar'
import NavBar from './components/NavBar'
import Section from './components/Section'

function App() {


  return (
    <div className='flex'>
      <div className='hidden md:block'><NavBar className="" /></div>

      {/* Mobile menu */}
      <MobileNavBar />

      <div className='flex flex-1 px-4 h-screen  m-auto md:ml-80 justify-center items-center md:justify-start transition-all duration-300 ease-in-out border border-black bg-gradient-to-r from-zinc-950 to-gray-950'>
        <Section />
      </div>

    </div>


  )
}

export default App
