import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Header({ children }) {
    const nav = useNavigate();

    return (
        // <div className='h-15 flex bg-gray-400 text-white p-4 items-center justify-between'>
        <div className='w-full flex flex-col sm:flex-row bg-gray-400 text-white p-4 items-center justify-between'>
            <h1 className='text-2xl sm:text-3xl font-bold ml-[3vw] cursor-pointer' onClick={() => nav('/')}>
                MechBlink
            </h1>
            
            <Navbar />

            {/* {showButtons ? (
                <div className='flex gap-2 mx-10'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => nav('/loginIntf')}>Login</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => nav('/registerIntf')}>Sign Up</button>
                </div>
            ) : (
                <div className='w-40 mx-10'></div>
            )} */}
            {children}
        </div>
    );
}