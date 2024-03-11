
import './App.css'
import NavBar from './components/NavBar'
import Section from './components/Section'
import backgroundImage from './assets/images/background.jpg'
function App() {


  return (
    <div className='flex'>
      <NavBar />
      <div className='flex flex-1 h-screen lg:ml-80 ml-72 transition-all duration-300 ease-in-out border border-black bg-gradient-to-r from-slate-950 to-slate-900'>
        <Section />
      </div>

    </div>


  )
}

export default App
