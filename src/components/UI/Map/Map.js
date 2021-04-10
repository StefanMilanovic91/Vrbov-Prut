import React from 'react';


const Map = () => {
    return (
        <div className="Map">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe className="Map__iframe" src="https://maps.google.com/maps?q=Platarska%20radnja%20Vrbov%20Prut&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Google Map" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map
