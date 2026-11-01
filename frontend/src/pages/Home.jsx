import Header from '../components/Header'
import MainBannar from '../assets/MainBannar.png'
import MechBlink24_7 from '../assets/MechBlink24_7.png'
import MechBlinkSeason from '../assets/MechBlinkSeason.png'

import { useNavigate } from 'react-router-dom';
export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <Header>
        <div className='flex gap-2 mx-10'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => nav('/loginIntf')}>Login</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => nav('/registerIntf')}>Sign Up</button>
        </div>
      </Header>
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
