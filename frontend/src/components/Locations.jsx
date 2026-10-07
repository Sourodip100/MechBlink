export default function Locations({props}) {
    return (
        <>
            <div> Tell us your current location</div>
            <div> {props.location.getAddress()} </div>
            <div> We are reacing to you in {props.location.getTime()}</div>
        </>
    )
}