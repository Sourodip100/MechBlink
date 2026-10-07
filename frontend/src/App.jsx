import Navbar from './components/Navbar'
import MainBannar from './assets/MainBannar.png'
import Locations from './components/Locations'
import MechBlink24_7 from './assets/MechBlink24_7.png'
import MechBlinkSeason from './assets/MechBlinkSeason.png'
function App() {

  return (
    <>
      <div className='h-15 flex bg-gray-400 text-white p-4'>
        <h1 className='text-3xl font-bold mx-10'>MechBlink</h1>
        <Navbar />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded mx-10'>Login</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded'>Sign Up</button>
      </div>
      <img src={MainBannar} className='w-7/10 h-60 my-5 mx-auto rounded-3xl shadow-3xl'></img>
      <div className='flex justify-evenly items-center my-5'>
        <img src={MechBlink24_7} className='w-7/30 h-60 rounded-3xl shadow-3xl'></img>
        <img src={MechBlinkSeason} className='w-7/30 h-60 rounded-3xl shadow-3xl'></img>
      </div>    
    </>
  )
}

export default App
