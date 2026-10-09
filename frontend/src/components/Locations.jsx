const backendUrl = "http://localhost:3000";
export default function Locations({ onLocationData }) {
    async function handleLocation() {
        const pincode = document.getElementById('pincode').value;
        if (!pincode || pincode.length !== 6) {
            alert("Please enter a valid 6-digit pincode");
            return;
        }
        const location = await fetch(`${backendUrl}/api/locations/${pincode}/services`);
        const locationData = await location.json();
        // console.log(locationData);
        onLocationData(locationData);

    }
    return (
        <>
            <div className='flex flex-row gap-3'>
                <div>
                    <p className='text-lg'> Tell us your current location </p>
                    <label htmlFor="pincode">Pincode : </label> 
                    <input type="number" placeholder="Enter your Pincode" id="pincode" className="px-2 text-blue-300 w-38 bg-white"></input>
                </div>
                <button className='h-8/10 m-2 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold px-4 py-2 rounded' onClick={()=>{handleLocation()}}>Check</button>
            </div>
        </>
    )
}

