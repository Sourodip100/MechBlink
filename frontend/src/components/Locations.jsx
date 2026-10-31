const url = import.meta.env.VITE_BACKEND_URL + "/api/serviceAreas";
import { useState } from 'react';

export default function Locations({ onLocationData }) {
    const [pin, setPin] = useState(null);

    async function handleLocation() {
        if (!pin || pin.toString().length !== 6) {
            alert("Please enter a valid 6-digit pincode");
            return;
        }
        // console.log("Fetching location data for pin:", pin);
        const services = await fetch(`${url}/${pin}`);
        if (services.status === 404) {
            alert("Sorry, we do not provide services in this area yet. Please try another location.");
            onLocationData(null); // Clear the location data if not found
            return;
        }
        const locationData = await services.json();
        // console.log(locationData);
        onLocationData(locationData);

    }
    return (
        <>
            <div className='flex flex-row gap-3'>
                <div>
                    <p className='text-lg'> Tell us your current location </p>
                    <label htmlFor="pincode">Pincode : </label> 
                    <input type="number" placeholder="Enter your Pincode" id="pincode" className="px-2 text-blue-300 w-38 bg-white" value={pin} onChange={(e) => setPin(e.target.value)}/>
                </div>
                <button className='h-8/10 m-2 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold px-4 py-2 rounded' onClick={() => handleLocation()}>Check</button>
            </div>
        </>
    )
}

