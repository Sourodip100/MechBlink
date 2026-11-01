import Location from "../../components/Locations";
import Header from "../../components/Header";
import { useState } from "react";
import SlideBar from "../../components/Slidebar";

const serviceImages = import.meta.glob(
    "../../assets/*.jpeg", {
    eager: true,
    import: "default"
});
export default function DashBoard() {
    const [locationData, setLocationData] = useState(null);
    return (
        <>
            <Header>
                <div className="mx-10">
                    <Location onLocationData={(data) => setLocationData(data)} className="mr-10" />
                </div>
            </Header>
            <main className="p-4 flex flex-col sm:flex-row gap-4">
                <SlideBar array={[
                    { url: "/mechanics", text: "Mechanics" },
                    { url: "/mybookings", text: "My Bookings" },

                ]} />
                <div>
                    <h2 className='text-2xl font-bold'>Book Instant Service</h2>
                    <div id="service-container">
                        {locationData ? (
                            <div>
                                <h3 className='text-xl font-bold'>Available Services in {locationData.city}, {locationData.state}</h3>
                                <ul className='grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-lg font-semibold'>
                                    {locationData.services.map((service, index) => {
                                        const image = serviceImages[`../../assets/${service}.jpeg`];
                                        return (
                                        <li key={index} 
                                        className="text-center border border-gray-300 rounded p-4 shadow hover:shadow-lg transition duration-300"
                                        >
                                            {image && (
                                                <img
                                                    src={image}
                                                    alt={service}
                                                    className="w-full h-30 sm:h-50 object-cover rounded"
                                                />
                                            )}
                                            {service}
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            <p>Please select a location to view available services.</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}