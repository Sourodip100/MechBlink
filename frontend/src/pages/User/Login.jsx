import { useState } from 'react';
function Login() {
    return (
        <>
            <div>
                <input type="text" placeholder="Username" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="password" placeholder="Password" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="submit" value="Login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' />
            </div>
        </>
    )
}

function Register() {
    return (
        <>
            <div>
                <input type="text" placeholder="Username" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="email" placeholder="Email" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="password" placeholder="Password" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="submit" value="Register" className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' />
            </div>
        </>
    )
}
export { Login, Register }
// export default function User({indication}) {
//     const [indi, setindi] = useState();
//     return (
//         <>
//             <div className='h-15 flex bg-gray-400 text-white p-4'>
//                 <h1 className='text-3xl font-bold mx-10'>MechBlink</h1>
//             </div>
//             {indi && (indi === 'login') ? <Login /> : <Register />}
//         </>
//     )
// }