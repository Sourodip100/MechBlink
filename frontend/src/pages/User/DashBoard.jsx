import Location from "../../components/Locations";
import { useState } from "react";
export default function DashBoard() {
    const [locationData, setLocationData] = useState(null);
    return (
        <>
            <div className='h-15 flex bg-gray-400 text-white'>
                <h1 className='text-3xl font-bold mx-10 p-4'>MechBlink</h1>
                <Location onLocationData={(data) => setLocationData(data)} />
            </div>
            <main>
                <h2 className='text-2xl font-bold'>Book Instant Service</h2>
                <div id="service-container"></div>
            </main>
        </>
    )
}