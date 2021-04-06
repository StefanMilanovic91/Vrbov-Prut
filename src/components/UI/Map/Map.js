import React from 'react';


const Map = () => {
    return (
        <div className="Map">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe className="Map__iframe" id="gmap_canvas" src="https://maps.google.com/maps?q=Platarska%20radnja%20Vrbov%20Prut&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map
