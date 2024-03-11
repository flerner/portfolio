
import './App.css'
import NavBar from './components/NavBar'
import Section from './components/Section'
import backgroundImage from './assets/images/background.jpg'
function App() {


  return (
    <div className='flex'>
      <div className='hidden md:block'><NavBar className="" /></div>

      <div className='flex flex-1 h-screen m-auto md:ml-80  transition-all duration-300 ease-in-out border border-black bg-gradient-to-r from-zinc-950 to-gray-950'>
        <Section />
      </div>

    </div>


  )
}

export default App
