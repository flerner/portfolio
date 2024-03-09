
import './App.css'
import NavBar from './components/NavBar'
import Section from './components/Section'
function App() {


  return (
    <div className='flex'>
      <NavBar />
      <div className='flex flex-1 justify-center lg:ml-80 ml-72 transition-all duration-300 ease-in-out border border-black '><Section /></div>

    </div>


  )
}

export default App
