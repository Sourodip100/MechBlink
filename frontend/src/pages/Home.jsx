import Navbar from '../components/Navbar'
import MainBannar from '../assets/MainBannar.png'
import Locations from '../components/Locations'
import MechBlink24_7 from '../assets/MechBlink24_7.png'
import MechBlinkSeason from '../assets/MechBlinkSeason.png'
import { useNavigate } from "react-router-dom"

function App() {
  const nav = useNavigate();
  function login_fun(){
    nav('/login');
  }
  function register_fun(){
    nav('/register');
  }
  return (
    <>
      <div className='h-15 flex bg-gray-400 text-white p-4'>
        <h1 className='text-3xl font-bold mx-10'>MechBlink</h1>
        <Navbar />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded mx-10' onClick={login_fun}>Login</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded' onClick={register_fun}>Sign Up</button>
      </div>
      <div>
        <img src={MainBannar} className='w-7/10 h-60 my-5 mx-auto rounded-3xl shadow-3xl'></img>
        <div className='w-7/10 flex justify-evenly items-center mx-auto my-5'>
          <img src={MechBlink24_7} className='w-1/2 h-60 rounded-3xl shadow-3xl'></img>
          <img src={MechBlinkSeason} className='w-1/2 h-60 rounded-3xl shadow-3xl'></img>
        </div>
      </div>

    </>
  )
}

export default App
