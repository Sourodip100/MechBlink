import { useState } from 'react';
const url = import.meta.env.VITE_BACKEND_URL + "/api/users";
function Login() {
    // console.log(url);
    return (
        <>
            <div>
            <form action={url + "/login"} method="POST">
                <label htmlFor="userId">Username:</label>
                <input type="text" id="userId" name="userId" placeholder="Username" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="submit" value="Login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' />
            </form>
            </div>
        </>
    )
}

function Register() {
    return (
        <>
            <div>
            <form action={url + "/register"} method="POST">
                <label htmlFor="userId">Username:</label>
                <input type="text" id="userId" name="userId" placeholder="Username" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" className='border border-gray-400 rounded px-4 py-2 mb-4' />
                <input type="submit" value="Register" className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded' />
            </form>
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