import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div className='w-1/3 flex justify-evenly items-center p-4 bg-gray-800 text-white'>
<Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
            </div>
        </>
    )
}