import '../assests/Css/LocationPage.css';

export default function Location () {
    return (
        <div>
            <h1>Location</h1>

            <div className='LocationInfo'>
                <p>
                    123 Main Street,
                    Springfield,
                    Anytown,
                    Calgary, AB
                </p>

                <img src='/img/location/examplemap.jpg'></img>
            </div>
        </div>
    );
}