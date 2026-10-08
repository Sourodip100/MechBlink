import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Header({ showAuthButtons = false }) {
    const nav = useNavigate();

    return (
        <div className='h-15 flex bg-gray-400 text-white p-4 items-center justify-between'>
            <h1 className='text-3xl font-bold mx-10 cursor-pointer' onClick={() => nav('/')}>
                MechBlink
            </h1>
            
            <Navbar />

            {showAuthButtons ? (
                <div className='flex gap-2 mx-10'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => nav('/login')}>Login</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' onClick={() => nav('/register')}>Sign Up</button>
                </div>
            ) : (
                <div className='w-40 mx-10'></div>
            )}
        </div>
    );
}